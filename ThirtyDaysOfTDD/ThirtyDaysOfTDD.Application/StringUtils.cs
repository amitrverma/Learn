using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThirtyDaysOfTDD.Application
{
    public class StringUtils
    {
        public int FindNumberOfOccurances(string sentenceToScan, string characterToScanFor)
        {
            if (characterToScanFor.Length > 1)
            {
                throw new ArgumentException();
            }

            var stringToCheckAsCharacterArray = sentenceToScan.ToCharArray();
            var characterToCheckFor = char.Parse(characterToScanFor);
            var numberOfOccurance = 0;

            for (var charIndex = 0; charIndex < stringToCheckAsCharacterArray.Length; charIndex++)
            {
                if (stringToCheckAsCharacterArray[charIndex] == characterToCheckFor)
                {
                    numberOfOccurance++;
                }
            }
            return numberOfOccurance;
        }
    }
}
