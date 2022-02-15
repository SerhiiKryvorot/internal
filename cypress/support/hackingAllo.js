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
    openCatalog() {
        cy.get('div[class="mh-catalog-btn"]').contains('Каталог').click()
    }
    selectNokia() {
        cy.get('p[class="item__title arrow-icon"]').contains(' Смартфони та телефони ').trigger('mouseover')
        cy.get('a[href="https://allo.ua/ua/products/mobile/proizvoditel-nokia/"]').should('be.visible').click({force:true})
    }
    compareNokias() {
        cy.get('div[class="compare"] svg').eq(0).click()
        cy.get('div[class="compare"] svg').eq(1).click()
    }
    openComparison() {
        cy.get('div[class="mh-actions"] a[href="https://allo.ua/ua/catalog/product_compare/index/"]').click()
    }
    assertMadeInChina(china) {
        cy.get('tr[class="attr-table__tr is-different"]').eq(-2).children('td[class="attr-table__td"]').eq(1)
            .should('contain', china).and('have.lengthOf', 1)
        cy.get('tr[class="attr-table__tr is-different"]').eq(-2).children('td[class="attr-table__td"]').eq(2)
            .should('contain', china).and('have.lengthOf', 1)
    }
}
