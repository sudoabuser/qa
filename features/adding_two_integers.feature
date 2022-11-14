Feature: Basic operations
    We want to use 4 operations: sum, substraction, multiplication and division.

    Scenario: Add two integers
        Given bob clicked AC
        And bob clicks <9>
        And bob clicks plus
        And bob clicks <5>
      # When bob clicks =
        Then bob should see the result <14>

    Scenario: Multiply two integers
        Given bob clicked AC
        And bob clicks <7>
        And bob clicks cross
        And bob clicks <3>
      # When bob clicks = 
        Then bob should see the result <21>

    Scenario: Subtract two integers
        Given bob clicked AC
        And bob clicks <6>
        And bob clicks minus
        And bob clicks <1>
      # When bob clicks =
        Then bob should see the result <5>

    Scenario: Divide two integers
        Given bob clicked AC
        And bob clicks <8>
        And bob clicks divide
        And bob clicks <4>
      # When bob clicks =  
        Then bob should see the result <2>
