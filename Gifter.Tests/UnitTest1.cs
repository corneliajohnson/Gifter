using System;
using Xunit;

namespace Gifter.Tests
{
    public class UnitTest1
    {
        [Fact]
        public void Two_Numbers_Should_Equal()
        {
            var num1 = 200;
            var num2 = 200;

            Assert.Equal(num1, num2);
        }
    }
}
