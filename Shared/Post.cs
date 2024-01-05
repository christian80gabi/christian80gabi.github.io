public class Post
{
    public int Id { get; set; }
    public string Title { get; set; } = "New";
    public DateOnly Date { get; set; }
    public string MarkdownFile { get; set; } = string.Empty;
    public string MarkdownContent { get; set; } = "Error 404";
}