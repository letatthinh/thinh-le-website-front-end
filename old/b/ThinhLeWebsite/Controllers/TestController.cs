using Microsoft.AspNetCore.Mvc;
using ThinhLeWebsite.ExternalServices;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ThinhLeWebsite.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TestController(IUserServiceApiClient userServiceApiClient) : ControllerBase
{
    /*static readonly HttpClient httpClient = new()
    {
        BaseAddress = new Uri("https://localhost:7270"),
    };*/

    // GET: api/<TestController>
    [HttpGet]
    public async Task<ActionResult<string>> Get()
    {
        /*httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjEzYmRlY2FlLWQ1ZTMtNGUzMC04MGEzLTlkZDU1OWYyNGE1NCIsInVzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiVGjhu4tuaCIsImZhbWlseV9uYW1lIjoiTMOqIiwibmFtZSI6IlRo4buLbmggTMOqIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkFkbWluIiwiTm9ybWFsIHVzZXIiXSwiYXVkIjpbImh0dHBzOi8vbG9jYWxob3N0OjcyNzAiLCJodHRwczovL2xvY2FsaG9zdDo3MjUyIl0sIm5iZiI6MTcxMzY3MjY1NiwiZXhwIjoxNzE2MjY0NjU2LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MjcwIn0.dARxCau5PXpO4H1j1a8Vpe9okZI0nDqZKJhPleh_XVc");

        using HttpResponseMessage response = await httpClient.GetAsync("/api/Users/users");

        var jsonResponse = await response.Content.ReadAsStringAsync();*/
        ICollection<UserResponseDto> a = await userServiceApiClient.UsersAsync();

        return Ok(a.First().FirstName);
    }

    // GET api/<TestController>/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
        return "value";
    }

    // POST api/<TestController>
    [HttpPost]
    public void Post([FromBody] string password)
    {
    }

    // PUT api/<TestController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/<TestController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
}
