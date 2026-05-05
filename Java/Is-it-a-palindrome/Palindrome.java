/*
Is it a palindrome?

Write a function that checks if a given string(case insensitive)
is a palindrome.

A palindrome is a word, number, phrase, or other sequence
of symbols that reads the same backwards as forwards, 
such as madam or racecar.
*/

public class Palindrome {
  public static Boolean isPalindrome(String x) {
    String reverseText = "";
    x = x.toLowerCase().trim();
    int maxIndex = x.length() - 1;
    
    for (int i = maxIndex; i >= 0; i--) {
      reverseText = reverseText + x.charAt(i);
    }

    return x.equals(reverseText);
  }

  public static void main(String[] args) {
    System.out.println(isPalindrome("aba "));
    System.out.println(isPalindrome("Abba"));
    System.out.println(isPalindrome("hello"));
    System.out.println(isPalindrome("Bob"));
    System.out.println(isPalindrome("Madam"));
    System.out.println(isPalindrome("AbBa"));
    System.out.println(isPalindrome(""));
  }
}
