package MiniProject.Mini.Project.model;

public class Resident {
    private Long id;
    private String name;
    private String type;
    private String mood;
    private int age;
    private boolean adopted;

    public Resident() {}

    public Resident(Long id, String name, String type, String mood, int age, boolean adopted) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.mood = mood;
        this.age = age;
        this.adopted = adopted;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getMood() { return mood; }
    public void setMood(String mood) { this.mood = mood; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public boolean isAdopted() { return adopted; }
    public void setAdopted(boolean adopted) { this.adopted = adopted; }
}
