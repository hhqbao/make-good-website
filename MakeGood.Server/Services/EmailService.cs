using System.Net;
using System.Net.Mail;
using MakeGood.Server.Models.Dtos;
using MakeGood.Server.Models.Emails;

namespace MakeGood.Server.Services;

public class EmailService
{
    private readonly IHostEnvironment _hostEnvironment;
    private readonly SmtpClient _smtpClient;
    private readonly string _botEmail;
    private readonly string _hostEmail;
    private readonly string _supportEmail;

    public EmailService(IConfiguration config, IHostEnvironment hostEnvironment)
    {
        _hostEnvironment = hostEnvironment;
        var mailingSettings = config.GetSection("AppSettings:MailingSettings");

        var host = mailingSettings.GetValue<string>("Host");
        var port = mailingSettings.GetValue<int>("Port");
        var enableSsl = mailingSettings.GetValue<bool>("EnableSsl");

        var username = mailingSettings.GetValue<string>("Username") ?? string.Empty;
        var password = mailingSettings.GetValue<string>("Password") ?? string.Empty;

        _botEmail = mailingSettings.GetValue<string>("BotEmail") ?? string.Empty;
        _hostEmail = mailingSettings.GetValue<string>("HostEmail") ?? string.Empty;
        _supportEmail = mailingSettings.GetValue<string>("SupportEmail") ?? string.Empty;

        _smtpClient = new SmtpClient(host, port)
        {
            Credentials = new NetworkCredential(username, password),
            EnableSsl = enableSsl
        };
    }

    public async Task SendNewEnquiryNotificationEmailAsync(NewEnquiryDto model)
    {
        var message = new MailMessage(_botEmail, _hostEmail)
        {
            IsBodyHtml = true,
            Subject = "[New Enquiry] Make Good Team Service",
            Body = new NewEnquiryEmailTemplate(_hostEnvironment, model).ToHtml()
        };

        message.CC.Add(_supportEmail);

        await _smtpClient.SendMailAsync(message);
    }
}