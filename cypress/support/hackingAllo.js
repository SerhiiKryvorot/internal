export class HackingAllo {
    openAllo() {
        cy.visit('https://www.allo.ua/')
    }
    storesInHeaderClick() {
        cy.get('a[href="https://allo.ua/ua/offline_stores/"]').contains('a', 'Магазини').click()
    }
    assertStoreAddress() {
        cy.intercept('/tr').as('tr')
        cy.get('h1[class="content__title"]').should('contain', 'Адреса магазинів АЛЛО')
        cy.wait('@tr')
    }
    searchXiaomi(xiaomi) {
        cy.intercept('POST', '/tr').as('tr')
        cy.get('input[id="search-form__input"]').clear().type(xiaomi+'{enter}')
        cy.wait('@tr')
    }
    assertItemQuantity() {
        cy.get('div[class="products-layout__item"]').should('have.length', '28')
    }
    searchSmartphones() {
        cy.get('span').contains('span', 'Смартфони і мобільні телефони').click()
    }
    assertSmartphonesFilterSelected() {
        cy.get('a[class="active-filter"] span').should('contain.text', 'Смартфони і мобільні телефони')
    }
    searchSamsung(samsung) {
        cy.intercept('POST', '/tr').as('tr')
        cy.get('input[id="search-form__input"]').clear().type(samsung+'{enter}')
        cy.wait('@tr')
    }
    assertSamsungFound(samsung) {
        cy.get('div a[class="product-card__title"]').eq(0).should('contain', samsung)
        cy.get('div a[class="product-card__title"]').eq(-1).should('contain', samsung)
    }
    openItem(samsung) {
        cy.intercept('POST', '/tr').as('tr')
        cy.get('div a[class="product-card__title"]').eq(-2).should('contain.text', samsung).click()
        cy.wait('@tr')
    }
    creditTabClick() {
        cy.scrollTo('center')
        cy.get('p[class="p-tabs__tab-title"]').should('contain.text', 'Кредит').eq(3).click()
    }
    findMonoCredit() {
        cy.get('span[class="credit-item__header-label"]').eq(-1)
            .should('contain.text', 'Монобанк').scrollIntoView({easing: 'linear'})
    }
    openDropDown() {
        cy.get('div[class="credit-item__type custom_select_field"]').eq(-1).click()
    }
    selectEightPayments() {
        cy.get('li[data-value="8"]').contains('li', '8 платежів*').click()
    }
    assertAmountEightPayments() {
        cy.get('span[class="credit-item__monthly"]').eq(-1).should('contain.text', '4 250 ₴')
    }
    selectThreePayments() {
        cy.get('li[data-value="3"]').contains('li', '3 платежі*').click()
    }
    assertAmountThreePayments() {
        cy.get('span[class="credit-item__monthly"]').eq(-1).should('contain.text', '11 333 ₴')
    }
}
