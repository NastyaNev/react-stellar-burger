describe('Тестирование работы главной страницы', () => {
    beforeEach(() => {
        cy.visit('react-stellar-burger');
        cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' });

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.get('#buns_section > .mt-6 > :nth-child(1) > [class^=ingredient_card]').as('firstBun');
        cy.get('#buns_section > .mt-6 > :nth-child(2) > [class^=ingredient_card]').as('secondBun');
        cy.get('[id=constructor_list]').as('constructorList');
        cy.get('[id=ingredients_list] li li a').as('ingredient');
        cy.get('[id=total_price]').as('totalPrice');
        cy.get('button').contains('Оформить заказ').as('buttonOrder');
        cy.get('[class^=middle_middle]').as('middleConstArea');
    })

    it('Открытие страницы', () => {
        cy.get('[class^=app-header_header]').should('exist');
        cy.get('[id=main_page_link]').should('exist');
        cy.get('[id=main_page_link]').should('have.class', 'text_color_primary').find('svg[fill="#F2F2F3"]');

        cy.get('[class^=dnd-container_sections]').should('exist');

        cy.get('@totalPrice').should('have.text', '0');
        cy.get('@buttonOrder').should('exist').and('be.disabled');
    })
    it('Секция с ингредиентами', () => {
        cy.get('@ingredient').should('exist');
        cy.get('[id=buns_section]').should('exist');
        cy.get('[id=buns_section] li a').should('exist').and('have.prop', 'type', 'bun');
        cy.get('[id=sauces_section]').should('exist');
        cy.get('[id=sauces_section] li a').should('exist').and('have.prop', 'type', 'sauce');
        cy.get('[id=mains_section]').should('exist');
        cy.get('[id=mains_section] li a').should('exist').and('have.prop', 'type', 'main');
    })
    it('Перетаскивание ингредиентов', () => {
        cy.get('@ingredient').contains('Соус фирменный Space Sauce').trigger('dragstart');
        cy.get('@constructorList').trigger('drop');
        cy.get('@ingredient').contains('Соус фирменный Space Sauce').get('.counter').should('exist').and('have.text', '1');
        cy.get('@middleConstArea').contains('Соус фирменный Space Sauce');
        cy.get('@buttonOrder').should('be.disabled');
        cy.get('@totalPrice').should('have.text', '80');

        cy.get('@ingredient').contains('Соус фирменный Space Sauce').trigger('dragstart');
        cy.get('@constructorList').trigger('drop');
        cy.get('@ingredient').contains('Соус фирменный Space Sauce').get('.counter').should('exist').and('have.text', '2');
        cy.get(':nth-child(1) > .constructor-element').contains('Соус фирменный Space Sauce');
        cy.get(':nth-child(2) > .constructor-element').contains('Соус фирменный Space Sauce');
        cy.get('@totalPrice').should('have.text', '160');

        cy.get('@firstBun').trigger('dragstart');
        cy.get('@constructorList').trigger('drop');
        cy.get('#buns_section > .mt-6 > :nth-child(1) > [class^=ingredient_card] > .counter').should('exist').and('have.text', '1');
        cy.get('#constructor_list > :nth-child(1) > .constructor-element').contains('Краторная булка N-200i');
        cy.get('#constructor_list > :nth-child(1) > .constructor-element').not('Соус фирменный Space Sauce');
        cy.get('@middleConstArea').not('Краторная булка N-200i');
        cy.get('#constructor_list > :nth-child(3) > .constructor-element').contains('Краторная булка N-200i');
        cy.get('#constructor_list > :nth-child(3) > .constructor-element').not('Соус фирменный Space Sauce');
        cy.get('@buttonOrder').should('not.be.disabled');
        cy.get('@totalPrice').should('have.text', '2670');

        cy.get('@secondBun').trigger('dragstart');
        cy.get('@constructorList').trigger('drop');
        cy.get('#buns_section > .mt-6 > :nth-child(2) > [class^=ingredient_card] > .counter').should('exist').and('have.text', '1');
        cy.get('#buns_section > .mt-6 > :nth-child(1) > [class^=ingredient_card] > .counter').should('not.exist');
        cy.get('@constructorList').contains('Флюоресцентная булка R2-D3');
        cy.get('@constructorList').not('Краторная булка N-200i');
        cy.get('@totalPrice').should('have.text', '2136');
    })
    it('Удаление элементов из списка', () => {
        cy.get('@ingredient').contains('Соус фирменный Space Sauce').trigger('dragstart');
        cy.get('@constructorList').trigger('drop');
        cy.get('@ingredient').contains('Соус фирменный Space Sauce').trigger('dragstart');
        cy.get('@constructorList').trigger('drop');
        cy.get('@ingredient').contains('Биокотлета из марсианской Магнолии').trigger('dragstart');
        cy.get('@constructorList').trigger('drop');

        cy.get('@constructorList').contains('Соус фирменный Space Sauce');
        cy.get('[class^=middle_middle] > :nth-child(1) > .constructor-element > .constructor-element__row > .constructor-element__action > svg')
            .click();
        cy.get('@totalPrice').should('have.text', '504');
        cy.get('[class^=middle_middle] > :nth-child(2) > .constructor-element > .constructor-element__row > .constructor-element__action > svg')
            .click();
        cy.get('@constructorList').not('Биокотлета из марсианской Магнолии');
        cy.get('@constructorList').contains('Соус фирменный Space Sauce');
    })
    it('Модальные окна', () => {
        cy.intercept('POST', '/api/orders', { fixture: 'orders.json' });
        cy.intercept('POST', '/api/auth/login', { fixture: 'login.json' });
        cy.intercept('GET', '/api/auth/user', { fixture: 'user.json' });

        cy.get('@firstBun').click();
        cy.location('pathname').should('eq', '/react-stellar-burger/ingredients/643d69a5c3f7b9001cfa093c');
        cy.get('[class^=modal_modal]').as('modal').should('exist');
        cy.get('[class^=ingredient-delails_contain]').should('exist');

        cy.get('body').type('{esc}');
        cy.get('@modal').should('not.exist');
        cy.location('pathname').should('eq', '/react-stellar-burger');

        cy.get('@firstBun').click();
        cy.get('[class^=overlay_overlay]').click(15, 15, { force: true });
        cy.get('@modal').should('not.exist');
        cy.location('pathname').should('eq', '/react-stellar-burger');

        cy.get('@firstBun').click();
        cy.get('[class^=modal_modal] > button').click();
        cy.get('@modal').should('not.exist');
        cy.location('pathname').should('eq', '/react-stellar-burger');

        cy.get('@secondBun').trigger('dragstart');
        cy.get('@constructorList').trigger('drop');
        cy.get('@buttonOrder').click();
        cy.location('pathname').should('eq', '/react-stellar-burger/login');
        cy.get('[class^=login_login_form_container]').should('exist');

        cy.get('input').first().type('asrozova@gmail.com');
        cy.get('input').last().type('111111');
        cy.get('button').contains('Войти').click();
        cy.get('@modal').should('exist');
        cy.get('[class^=order-details_order_ditails]').should('exist');

        cy.get('body').type('{esc}');
        cy.get('@modal').should('not.exist');

        cy.get('@buttonOrder').click();
        cy.get('[class^=overlay_overlay]').click(30, 30, { force: true });
        cy.get('@modal').should('not.exist');

        cy.get('@buttonOrder').click();
        cy.get('[class^=modal_modal] > button').click();
        cy.get('@modal').should('not.exist');
    })
})