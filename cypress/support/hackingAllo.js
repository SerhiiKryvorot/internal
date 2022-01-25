export class HackingAllo {
    openAllo() {
        cy.visit('https://www.allo.ua/')
    }
    storesInHeaderClick() {
        cy.get('a[href="https://allo.ua/ua/offline_stores/"]').contains('a', 'Магазини').click()
    }
    assertStoreAddress() {
        cy.intercept('/tr').as('tr')
        cy.get('h1[class="content__title"]').should('contain', 'Адреси магазинів')
        cy.wait('@tr')
    }
    searchXiaomi() {
        cy.intercept('/tr').as('tr')
        cy.get('input[id="search-form__input"]').clear().type('xiaomi{enter}')
        cy.wait('@tr')
    }
    assertItemQuantity() {
        cy.get('div[class="products-layout__item"]').should('have.length', '28')
    }
    searchSmartphones() {
        cy.get('span').contains('span', 'Смартфони і мобільні телефони').click()
    }


    assertSmartphonesFilterSelected() {
        cy.wait(20000)
        cy.get('a[class="active-filter"] span').should('contain.text', 'Смартфони і мобільні телефони')
    }
}
