using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System;
using Gifter.Data;
using Gifter.Models;
using Gifter.Repositories;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly UserProfileRepository _userProfileRepository;
        public UserProfileController(ApplicationDbContext context)
        {
            _userProfileRepository = new UserProfileRepository(context);
        }

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetUserProfile(string firebaseId)
        {
            return Ok(_userProfileRepository.GetByFirebaseUserId(firebaseId));
        }

        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
            userProfile.DateCreated = DateTime.Now;
            _userProfileRepository.Add(userProfile);
            return Ok(userProfile);
        }
    }
}

//using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.Mvc.Infrastructure;
//using System;
//using Gifter.Data;
//using Gifter.Models;
//using Gifter.Repositories;

//namespace Gifter.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class UserProfileController : ControllerBase
//    {
//        private readonly IUserProfileRepository _userProfileRepo;

//        public UserProfileController(ApplicationDbContext context)
//        {
//            _userProfileRepo = new UserProfileRepository(context);
//        }

//        public UserProfileController(IUserProfileRepository userProfileRepo)
//        {
//            _userProfileRepo = userProfileRepo;
//        }

//        [HttpGet("{firebaseUserId}")]
//        public IActionResult GetUserProfile(string firebaseUserId)
//        {
//            return Ok(_userProfileRepo.GetByFirebaseUserId(firebaseUserId));
//        }

//        [HttpPost]
//        public IActionResult Post(UserProfile userProfile)
//        {
//            userProfile.CreateDateTime = DateTime.Now;
//            _userProfileRepo.Add(userProfile);
//            return Ok(userProfile);
//        }

//        [HttpGet]
//        public IActionResult Get()
//        {
//            return Ok(_userProfileRepo.GetAll());
//        }

//        [HttpGet("{id}")]
//        public IActionResult Get(int id)
//        {
//            var userProfile = _userProfileRepo.GetById(id);
//            if (userProfile == null)
//            {
//                return NotFound();
//            }
//            return Ok(userProfile);
//        }

//        [HttpPut("{id}")]
//        public IActionResult Put(int id, UserProfile userProfile)
//        {
//            var userP = _userProfileRepo.GetById(id);
//            if (id != userProfile.Id || userP == null)
//            {
//                return BadRequest();
//            }

//            _userProfileRepo.Update(userProfile);
//            return NoContent();
//        }

//        [HttpDelete("{id}")]
//        public IActionResult Delete(int id)
//        {
//            UserProfile userProfile = _userProfileRepo.GetById(id);
//            if (userProfile == null)
//            {
//                return BadRequest();
//            }

//            _userProfileRepo.Delete(id);
//            return NoContent();
//        }

//    }
//}
