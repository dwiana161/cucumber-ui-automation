Feature: Login to Kasiraja Demo Apps

  @feature=login
  Scenario Outline: User Success Login to KasirAja Demo Apps

    Given user already on login page
    When user input email <email> and password <password> 
    Then url contain <pathName> and showing title kasirAja

    Examples:
      | email                  | password             | pathName   |
      | kasirToko@gmail.com    | kasir123             | dashboard  |

  Scenario Outline: User Login with invalid credential

    Given user already on login page
    When user input invalid email <invalidEmail> and invalid password <invalidPassword> 
    Then alert message displayed <alertMessage>

    Examples:
      | invalidEmail          | invalidPassword       | alertMessage                       |
      | kasir123@test1        | kasir123@             | must be valid email                |
      | dwianakas@gmail.com   | dwiana123             | Kredensial yang Anda berikan salah |

