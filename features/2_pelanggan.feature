Feature: Add New Pelanggan Kasiraja Demo Apps

  @feature=Pelanggan
  Scenario Outline: User Successfully Add New Pelanggan

    Given user already login to dashboard page 
    When user click pelanggan list 
    When user click tambah
    When user input nama <nama>, no.hp <no.hp>, alamat <alamat> and keterangan <keterangan>
    Then user get <message> message displayed

    Examples:
      | nama       | no.hp         | alamat      | keterangan       | message   |
      | velya      | 08567890564   | bandung     | perempuan        | success   |