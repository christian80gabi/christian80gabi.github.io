namespace christian80gabi.github.io.Models;

public class Post
{
    public int Id { get; set; }
    public string Title { get; set; } = "New";
    public DateOnly Date { get; set; }
    public string MarkdownFile { get; set; } = string.Empty;
    public string MarkdownContent { get; set; } = "Error 404";

    private const string Content = "**Error 404** No Content found! [blog](blog)";
    public static List<Post> Posts { get; set; } = GetPosts();
    private static List<Post> GetPosts()
    {
        return
        [
            new Post { Id = 1, Title = "Post 1", MarkdownFile = "post1.md", MarkdownContent = Content },
            new Post { Id = 2, Title = "Post 2", MarkdownFile = "post2.md", MarkdownContent = Content },
        ];
    }
}