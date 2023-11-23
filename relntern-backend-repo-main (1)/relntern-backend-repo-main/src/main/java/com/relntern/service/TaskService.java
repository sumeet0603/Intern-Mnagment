package com.relntern.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.relntern.model.Intern;
import com.relntern.model.Task;
import com.relntern.repository.InternRepository;
import com.relntern.repository.TaskRepository;

@Service
public class TaskService {

	@Autowired
	private TaskRepository taskRepository;
	
	@Autowired
	private InternRepository internRepo;


	public void registerTask(int id,Task task) {
		
		Intern intern = internRepo.findById(id).get();
		intern.getTask().add(task);
//		return taskRepository.save(task);/
		System.out.println(intern);
		internRepo.save(intern);
	}
	
	public List<Task> getTaskById(int id){
		return taskRepository.findByInternId(id);
	}
	
	public List<Task> getTask() {
		return (List<Task>) taskRepository.findAll();
	}
	
	public void deleteTask(Integer id) {
		taskRepository.deleteById(id);
	}
	
	public Task updateTask(Task updatedTask) {
		Integer id = updatedTask.getId();
		java.util.Optional<Task> optionalTask = taskRepository.findById(id);
		if (optionalTask.isPresent()) {
			Task task = optionalTask.get();
	        task.setTask(updatedTask.getTask());
			task.setDescription(updatedTask.getDescription());
			task.setStart(updatedTask.getStart());
			task.setEnd(updatedTask.getEnd());
			return taskRepository.save(task);
		}
		return null;
	}
}
