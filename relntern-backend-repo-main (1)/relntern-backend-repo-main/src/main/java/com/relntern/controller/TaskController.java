package com.relntern.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.relntern.model.Task;
import com.relntern.model.addTask;
import com.relntern.service.TaskService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {

	@Autowired
	private TaskService taskService;

	@PostMapping("/registerTask/{id}")
	public void registerTask(@PathVariable int id, @RequestBody Task task) {
		System.out.println(id);
		taskService.registerTask(id, task);
	}

	@GetMapping("/getTask")
	public List<Task> getTask() {
		return taskService.getTask();
	}
	@GetMapping("/getTaskById/{id}")
	public List<Task> getTaskById(@PathVariable int id) {
		System.out.println(id);
		return taskService.getTaskById(id);
	}

	@DeleteMapping("/deleteTask")
	public void deleteTask(@RequestParam Integer id) {
		taskService.deleteTask(id);
	}
}
