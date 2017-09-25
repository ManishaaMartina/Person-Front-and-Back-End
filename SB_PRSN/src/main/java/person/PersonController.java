package person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.ModelAndView;
@CrossOrigin(origins = "*")
@Controller
public class PersonController {

	@Autowired
	private CustomerRepository repo;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView Hello() {ModelAndView model = new ModelAndView("personX.jsp");model.addObject("list", repo.findAll());return model;}

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public String additem(@ModelAttribute("person") Person p) {if (p.getName() != null && p.getAge() != 0)repo.saveAndFlush(p);return "redirect:/";}

	@RequestMapping(value = "/edit/{id}", method = RequestMethod.GET)
	public ModelAndView edit(@PathVariable Integer id) {ModelAndView model = new ModelAndView("../personX.jsp");model.addObject("newPerson", repo.findOne(id));model.addObject("list", repo.findAll());return model;}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String update(@ModelAttribute("person") Person p) {if (p.getName() != null && p.getAge() != 0 && p.getId() != 0)repo.saveAndFlush(p);return "redirect:/";}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
	public String delete(@PathVariable Integer id) {repo.delete(id);return "redirect:/";}
}