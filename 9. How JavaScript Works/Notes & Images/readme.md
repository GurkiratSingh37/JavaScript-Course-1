1. How Javascript works overview?, How code is executed & Global Execution Context - "92-hjw_01.js"
      
      ![Alt text](image.png)

1.1 - Why our code is compiled

1.1 - 1st out code goes through "compilation Phase" which is made up of three parts. 

![Alt text](image-1.png)

      i. Tokenizing/lexing - in which our code is divided into small chunks.
      ii. Parsing - after studying the small chunks of our code, AST - Abstract Syntax Tree is formed. This makes our code to an executable format.

1.2 - BUT!!! in ecmascript, there is nothing mentioned about that the code has to be compiled before execution. 

- But they have mentioned these things like:

      a. Early error checking.
      b. Determining appropriate scopes for variables.
      
- So, inorder to do these things we have to compile our code.

1.2 - This can be scene when - (CHECK point 1.2 in file 'hjw_01.js').

- As you can see a '.' was added just before the name but when we run the file it generates an ERROR even if there are line written above it.
      
      ** NOTE:- Not all errors can be determined by the javascript because it was to compile as fast as possible.
      
![Alt text](image-2.png)

1.3 - Now back to the ii. step of "parsing". As we have defined 'firstName' in global scope, so JavaScript know this before the execution 
      of the code. 

![Alt text](image-3.png)

1.4 - This code (1.1 in file 'hjw_01.js') after 1st phase the js get's to know that there is some variable 'firstName' which is defined in 
- global scope, it is not yet created.

![Alt text](image-4.png)
      
      - We need to create a execution context and the first context which is created is "GLOBAL EXECUTION CONTEXT".

1.5 - "GLOBAL EXECUTION CONTEXT" is also divided into two phase:
      
      i. Creation Phase - when global execution is created.
      ii. Code Execution Phase - when code is executed.
      
So, in our code var ' firstName = "Gurkirat"; ' the firstName goes into the Creation Phase and it is created with undefined value

      BECAUSE it is created with "var" **. 
   ![Alt text](image-7.png)

- Now, in the Creation phase/Global memory, the variables in the code are created line by line.

            console.log(this); // In C.P./G.M., {W}
            console.log(window); // In G.M., {W}
            console.log(firstName); // In G.M., undefined

- After " var firstName = "Gurkirat"; ", value of 'firstName' is changed to "Gurkirat" in the G.M. After that when we try to print the value of 'firstName', we'll get "Gurkirat"
            
            var firstName = "Gurkirat";
            console.log(firstName)
   ![Alt text](image-9.png)

1.6 - ![Alt text](image-6.png) - In this image, after the highlighted line it is writen "the scope chain is created"

<br><br>
2. What happens to function declarations ? - "93-hjw_02.js"

2.1 - ![Alt text](image-10.png)

- In compilation phase, code firstly js will check/see all of the global scope variable & functions.

- This is the lexing i.e. how are variable  or functions are assigned. Js is Lexical scope, how we have written the code decides in which scope they will go.

2.2 - As the GEC = global execution context is created, all of are code is then seen and variables are assigned with values one by one.

![Alt text](image-11.png) 
-  all of the function and variable are created in the global memory with values undefined for varibles.

      NOTE** :- window object is created 1st and then it's value is assigned to "this".

2.3 - After that our line is executed one by one in C.E.P. - code execution phase.
      ![Alt text](image-12.png)

<br><br><br>
3. Hoisting

3.1 See this code: <br>
${\color{lightgreen}console.log(this);}$ <br>
${\color{lightgreen}console.log(window);}$ <br>
${\color{lightgreen}console.log(myFunction);}$ <br>
${\color{lightgreen}console.log(fullName);}$ <br><br>
${\color{lightgreen}function\ myFunction() }$ <br>
${\color{lightgreen} \{ \ console.log("this is my function"); \ \}}$ <br> <br>
${\color{lightgreen}var \ firstName = "Gurkirat";}$ <br>
${\color{lightgreen}var \ lastName = "Singh";}$ <br>
${\color{lightgreen}var \ lastName = "Singh";}$ <br>
${\color{lightgreen}var \ fullName = firstName+" "+lastName;}$ <br>
${\color{lightgreen}console.log(fullName);}$ <br>
      
      - As you can see, "console.log(myFunction)" prints the whole function even before I have assigned one. 
      It is because the function's value has already been assigned in the "global memory" (Creation Phase) - when global execution is created.

3.2 - you can even call that function before even assigning it.

      > myFunction();

3.3 - When the code is executed the G.E.C.(global execution context) gets pop() from the stack

![Alt text](image-13.png)


<br><br><br>

4. What happens to Function Expressions? - (94-hjw_03.js)

4.1 - <br>
${\color{lightgreen}console.log(myFunction);}$ <br>
${\color{lightgreen}var \ myFunction = function() \{ }$ <br>
${\color{lightgreen} console.log("This is my function")  }$ <br>
${\color{lightgreen} \} }$ <br>

      We'll get undefined as an output.
      BECAUSE, now the function is defined with 'var' data-type which causes it to get the value of undefined in "creation Phase"/global memory.
      
   ![Alt text](image-14.png)

4.2 - Only After the function assignment to the variable then only the "myFunction" value int the "create phase"/"global memory" 
      is changed to the actual function
      ![Alt text](image-15.png)


NOW WHAT WILL HAPPEN IN THE CASE OF LET AND CONST???? IN THE NEXT FILE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


<br><br><br>

5. Are let and const are hoisted ? (95-hjw_04 - Are let and const are hoisted .js)

5.1 - <br>
${\color{lightgreen}console.log(firstName);}$ <br>
${\color{lightgreen}let \ firstName = "Gurkirat";}$ <br>
${\color{lightgreen}console.log(firstName);}$ <br>

In this a variable is assigned with data type "let" which cause the value of 'firstName' to be set to "uninitialized" when G.E.C. is created.
![Alt text](image-16.png)

5.2 - This will cause error during the compilation phase that "cannot access it before initialization".

5.3 - AND Yes!!!! 'let' and 'const' are hoisted i.e. they are added to the global memory before execution but it is set to uninitialize.

      NOTE**** :- What is "TDZ"???? It stands for "temporal dead zone". It basically shows that the variable defined by 'let' data type 
will stay in 'T.D.Z.' till it is not initialized.



 - SUMMARYY Till Now:-
 ![Alt text](image-17.png)
 ![Alt text](image-18.png)


------------------------------------------------------------------------------------------------------------------------------------------


96 - Function execution contex (96-Function execution contex.js)

96.1 - Refering to the code in the file: First of all the variables & function will be created and stored in the memory in "Memory Creation Phase".
![Alt text](image-19.png)

96.2 - After that in "Code Execution Phase":
![Alt text](image-20.png)

96.3 - In the 4th part of the code i.e. 

      " const personName = getFullName("Gurkirat", "Singh") ", 

- A function is called and
DO REMEMBER*** that in javascript every time a function is called a new execution context is created which is known as "Function execution contex".

![Alt text](image-21.png)

96.4 - Now inside this function tooo, the variables will get their memory in "Local Memory Creation" and then the "Code Execution" will change their values from "uninitialized" to the values defined in the function.

- And at last the function will return "fullName" which will change the value of "personName" variable which called the function in first place.

![Alt text](image-22.png)

      NOTE*** - This "Function Execution Contex" will also be pushed onto the stack till it is completed/returns the value.

<br><br><br>

97. Scope chain and lexical environment (97-Scope chain and lexical environment.js)

      ![Alt text](image-23.png)

97.1 - Follow the same procedure to create "Global Execution Context".

![Alt text](image-24.png)

97.2 - Now the function is called "printName()". SOOOOooooooooooooooo,

![Alt text](image-25.png)

97.3 - Now, the execution comes to the 3rd line of the function i.e. console.log(lastName). BUT!!!! 'lastName' is not available in the Local Memory. <br><br>
**** So, JavaScript will look into the memory of global context.

      This is known as lexical scope. This function has Glocal Context as it's "lexical scope".


<br><br><br>

98. Intro to closures (98-Intro to closures.js)

98.1 - FIRST READ THE .js FILE.
![Alt text](image-26.png)

98.2 - As we have known from the above points:
![Alt text](image-27.png)

98.3 - An FEC is pushed onto the stack, and "printFullName" function is now in FEC
![Alt text](image-28.png)

- 'ans' initially was "uninitialized"(ui) but when 'printName' function is returned it's value is changed into 'printName' function.
![Alt text](image-29.png)

- Now, the 3rd line executes i.e. 'ans()' and ans is storing ![Alt text](image-30.png)

- Now see the image, where do we get the firstName And lastName to print because it is neither available in local scope nor inside global.
![Alt text](image-31.png)

- *** Important Point: As i am returning a function "printName()" from inside 'printFullName()', then it will return with the memory(all local variables of that function-printFullName) of it's parent function i.e. in which it is defined.

---
<br><br>
- Now let's see the correct way of things getting processed here.

![Alt text](image-32.png)

98.4 - Now inside the printName function as soon as it reaches the return statement, it will be return the function + all local variables
![Alt text](image-33.png)

- So, when a function get's returned from another function then it will take all of the local memory variables with him. That means it will get returned with it's <b>Lexical Environment</b>.

      A closure is a fundamental concept in JavaScript that refers to the ability of a function to remember and access variables from its outer (enclosing) scope even after that outer function has finished executing. In simpler terms, a closure "closes over" the variables it needs, allowing those variables to remain accessible even when the function that created them has completed its execution.

98.5 - Now "ans" value in the global context will change to:
![Alt text](image-34.png)

98.6 - Now 'ans()' is called then the previous function execution context will be popped from the stack and new FEC will be added to the stack.
![Alt text](image-35.png)


<br><br><br>

99. Closure Example 2 - (99-Closure Example 2.js)
      ![Alt text](image-36.png)

99.1 - Initially, "Memory Creation Phase" will have these things.
![Alt text](image-37.png)

99.2 - Now, onto the 'Code Execution Phase' 1st line work is done as the function is added to global memory context. Now, the 2nd line calls the function 'hello()' with argument "args". Now a <b>Function Execution Context</b> will be formed for the 'hello' function
- Initially, a & b are const so they will be "uninitialized". It also have an anonymous function which is getting returned.
![Alt text](image-39.png)

- Now, when the 3rd line get's executed which will return a function and this function will have all of the local memory variables returned with it because it knows that it will need them somewhere.

- So, ans value will be changed in the global context from 'ui' to 
![Alt text](image-40.png)

It was all done when by the 2nd line.

- Now the 3rd line, will be executed and it call 'ans()', so a F.E.C. is made. When inside the returning function, it is printing a,b & x BUT!!! it's not in there, so it will check it's lexical environment i.e. the outer function 'hello()'.
![Alt text](image-41.png)

<br><br>

100. Closure Example 3 - (100-Closure Example 3.js)
![Alt text](image-44.png)

100.1 - As we all know the steps:
![Alt text](image-42.png)

![Alt text](image-43.png)

- Now Execution of myFunction is complete i.e. the second line. Onto the 3rd line, Now square() is called
![Alt text](image-45.png)

101. Closure Example 4 - (101-Closure Example 4.js)
![Alt text](image-49.png)

101.1 - ![Alt text](image-46.png)

101.2 - ![Alt text](image-47.png)

101.3 - When executing if statement, it has to look for 'count', which is not available in local memory of the FEC, so it looks in global memory context and yes it founds the value of "count" with the 'myFunc'.
![Alt text](image-48.png)

