using MakeGood.Server.Models.Dtos;

namespace MakeGood.Server.Models.Emails;

public class NewEnquiryEmailTemplate(IHostEnvironment hostEnvironment, NewEnquiryDto model)
{
    public string ToHtml()
    {
        var filePath = Path.Combine(hostEnvironment.ContentRootPath, "EmailTemplates\\NewEnquiry.html");

        var html = File.ReadAllText(filePath);

        html = html.Replace("??Name??", model.Name);
        html = html.Replace("??Email??", model.Email);
        html = html.Replace("??Phone??", model.Phone);
        html = html.Replace("??Message??", model.Message);

        return html;
    }
}