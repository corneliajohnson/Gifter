﻿using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Gifter.Data;
using Gifter.Models;

namespace Gifter.Repositories
{
    public class PostRepository : IPostRepository
    {
        private readonly ApplicationDbContext _context;

        public PostRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Post> GetAll()
        {
            return _context.Post.Include(p => p.UserProfile).ToList();
        }

        public Post GetById(int id)
        {
            return _context.Post.Include(p => p.UserProfile).FirstOrDefault(p => p.Id == id);
        }
    }
}