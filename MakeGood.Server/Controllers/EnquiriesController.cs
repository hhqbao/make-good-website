using MakeGood.Server.Models.Dtos;
using MakeGood.Server.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace MakeGood.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnquiriesController(EmailService emailService) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Create(NewEnquiryDto model)
        {
            try
            {
                var client = new HttpClient();
                var result = await client.PostAsync($"https://www.google.com/recaptcha/api/siteverify?secret=6LcvmkcqAAAAAMEXKClAonP36rqiXsoCFMuhP55Y&response={model.Captcha}", null);
                var responseBody = await result.Content.ReadAsStringAsync();

                var recaptchaResult = JsonConvert.DeserializeObject<CaptchaResponseDto>(responseBody);

                if (recaptchaResult is not { Success: true })
                    return BadRequest("Invalid captcha");

                await emailService.SendNewEnquiryNotificationEmailAsync(model);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}