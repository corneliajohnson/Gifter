﻿using Gifter.Models;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface ICommentRepository
    {
        void Add(Comment comment);
        void Delete(int id);
        Comment GetById(int id);
        List<Comment> GetByPostId(int id);
        void Update(Comment comment);
    }
}