using Microsoft.AspNetCore.Mvc;
using Gifter.Repositories;
using Gifter.Models;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpGet("getbyuser/{id}")]
        public IActionResult GetByUser(int id)
        {
            return Ok(_postRepository.GetByUserProfileId(id));
        }

        [HttpPost]
        public IActionResult Post(Post post)
        {
            _postRepository.Add(post);
            return CreatedAtAction("Get", new { id = post.Id }, post);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Post post)
        {
            Post p = _postRepository.GetById(id);
            if (id != post.Id || p == null)
            {
                return BadRequest();
            }

            _postRepository.Update(post);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Post post = _postRepository.GetById(id);
            
            if(post == null)
            {
                return BadRequest();
            }

            _postRepository.Delete(id);
            return NoContent();
        }

        [HttpGet("search")]
        public IActionResult Search(string q, bool sortDesc)
        {
            return Ok(_postRepository.Search(q, sortDesc));
        }
    }
}