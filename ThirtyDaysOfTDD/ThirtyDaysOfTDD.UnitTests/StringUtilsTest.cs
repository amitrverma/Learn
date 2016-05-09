using System;
using NUnit.Framework;
using ThirtyDaysOfTDD.Application;

namespace ThirtyDaysOfTDD.UnitTests
{
    [TestFixture]
    public class StringUtilsTest
    {
        private StringUtils _stringUtils;

        [OneTimeSetUp]
        public void SetupStringUtilTests()
        {
            _stringUtils = new StringUtils();
        }

        [Test]
        public void ShouldBeAbleToCountNumberOfLettersInSimpleSentence()
        {
            var sentenceToScan = "TDD is awesome!";
            var characterToScanFor = "e";
            var expectedResult = 2;

            int result = _stringUtils.FindNumberOfOccurances(sentenceToScan, characterToScanFor);
            Assert.AreEqual(expectedResult,result);
        }

        [Test]
        public void ShouldBeAbleToCountNumberOfLettersInAComplexSentence()
        {
            var sentenceToScan = "Once is unique, twice is a coincidence, three times is a pattern";
            var characterToScanFor = "n";
            var expectedResult = 5;

            int result = _stringUtils.FindNumberOfOccurances(sentenceToScan, characterToScanFor);
            Assert.AreEqual(expectedResult,result);
        }

        [Test]
        public void ShouldGetAnArgumentExceptionWhenCharacterToScanForIsLargerThanOneCharacter()
        {
            var sentenceToScan = "This test should throw an exception";
            var characterToScanFor = "xx";

            Assert.That( () => _stringUtils.FindNumberOfOccurances(sentenceToScan, characterToScanFor), Throws.TypeOf< ArgumentException>());

        }    
    }
}
