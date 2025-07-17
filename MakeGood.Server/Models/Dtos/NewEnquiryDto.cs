namespace MakeGood.Server.Models.Dtos;

public class NewEnquiryDto
{
    public string Name { get; set; }

    public string Email { get; set; }

    public string Phone { get; set; }

    public string Message { get; set; }

    public string Captcha { get; set; }
}