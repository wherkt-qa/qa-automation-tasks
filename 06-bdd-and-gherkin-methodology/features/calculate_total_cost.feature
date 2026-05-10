Feature: Shopping Cart
    Scenario: Calculate total cost

    Given the following products are added to the shopping cart:

    | Product   | Price |

    | Fridge    | 2000  |

    | Mouse     | 150   |

    | Lamp      | 50    |

    When I calculate the total cost

    Then the total cost should be 2200


    