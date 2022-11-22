Feature: Calculator
  We want to use this calculator to its maximum capacity.

  # Scenario: Add two integers
  #   Given bob is on the main screen
  #   And bob clicks <9>
  #   And bob clicks plus
  #   And bob clicks <5>
  #   When bob clicks =
  #   Then bob should see the result <14>

  # Scenario: Multiply two integers
  #   Given bob is on the main screen
  #   And bob clicks <7>
  #   And bob clicks cross
  #   And bob clicks <3>
  #   When bob clicks =
  #   Then bob should see the result <21>

  # Scenario: Subtract two integers
  #   Given bob is on the main screen
  #   And bob clicks <6>
  #   And bob clicks minus
  #   And bob clicks <1>
  #   When bob clicks =
  #   Then bob should see the result <5>

  # Scenario: Divide two integers
  #   Given bob is on the main screen
  #   And bob clicks <8>
  #   And bob clicks divide
  #   And bob clicks <4>
  #   When bob clicks =
  #   Then bob should see the result <2>

  # Scenario: Deleting
  #   Given bob is on the main screen
  #   And bob clicks <4>
  #   And bob clicks ⌫
  #   And bob clicks <3>
  #   Then bob should see the result <3>

@View
  Scenario: View history
  
    Given bob is on the main screen
    When bob clicks the history button
    Then bob should see the saved results in history

  Scenario: Clear history
    Given bob is on the main screen
    And bob clicks the history button
    When bob clicks clear history
    Then bob should see the history empty