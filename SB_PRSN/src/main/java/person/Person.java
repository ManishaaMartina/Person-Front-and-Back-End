package person;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Person {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private Integer age;
	private String name;

	public Integer getId() {return id;}
	
	public Integer getAge() {return age;}

	public String getName() {return name;}
	
	public void setId(Integer id) {this.id = id;}

	public void setAge(Integer age) {this.age = age;}

	public void setName(String name) {this.name = name;}
}