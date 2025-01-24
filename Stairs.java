import java.util.Scanner;


public class Stairs {
    public static void main(String[] args) {
        
        Scanner scan = new Scanner(System.in);

        // Enter first input
        System.out.print("Enter a character: ");
        String character = scan.nextLine();

        System.out.print("Enter number of spaces: ");
        int spaces = scan.nextInt();
        
        String emptyString = " ";
        int repeatCount = 1;
        
        for (int i = spaces; i > 0; i--){
            System.out.println(emptyString.repeat(i-1) + character.repeat(repeatCount));
            repeatCount++;
        }
        
        
    }
}
