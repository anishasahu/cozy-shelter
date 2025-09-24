package MiniProject.Mini.Project.controller;

import MiniProject.Mini.Project.model.Resident;
import MiniProject.Mini.Project.service.ResidentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/residents")
@CrossOrigin(origins = "http://localhost:5173")
public class ResidentController {
    private final ResidentService service;

    public ResidentController(ResidentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Resident> all() {
        return service.findAll();
    }

    @PostMapping
    public Resident add(@RequestBody Resident resident) {
        return service.addResident(resident);
    }

    @PutMapping("/{id}")
    public Resident update(@PathVariable Long id, @RequestBody Resident resident) {
        return service.updateResident(id, resident);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteResident(id);
    }
}
