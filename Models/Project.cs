namespace christian80gabi.github.io.Models;

public class Project
{
    public DateOnly Date { get; set; } = DateOnly.FromDateTime(DateTime.Now);
    public string Title { get; set; } = string.Empty;
    public string Status { get; set; } = "New";
    public string? Scope { get; set; }
    public string? Source { get; set; }
    public string? Summary { get; set; }
    public List<String> Tags { get; set; } = ["Other"];
    public string Cover { get; set; } = string.Empty;
}