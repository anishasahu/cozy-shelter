package MiniProject.Mini.Project.service;

import MiniProject.Mini.Project.model.Resident;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class ResidentService {
    private final Map<Long, Resident> residents = new HashMap<>();
    private final AtomicLong counter = new AtomicLong(1);

    public List<Resident> findAll() {
        return new ArrayList<>(residents.values());
    }

    public Resident addResident(Resident resident) {
        // prevent duplicate by name
        boolean exists = residents.values().stream()
                .anyMatch(r -> r.getName().equalsIgnoreCase(resident.getName()));
        if (exists) return null;

        resident.setId(counter.getAndIncrement());
        residents.put(resident.getId(), resident);
        return resident;
    }

    public Resident updateResident(Long id, Resident updated) {
        Resident existing = residents.get(id);
        if (existing != null) {
            existing.setName(updated.getName());
            existing.setType(updated.getType());
            existing.setMood(updated.getMood());
            existing.setAge(updated.getAge());
            existing.setAdopted(updated.isAdopted());
        }
        return existing;
    }

    public void deleteResident(Long id) {
        residents.remove(id);
    }
}
