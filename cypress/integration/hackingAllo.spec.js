import {HackingAllo} from "../support/hackingAllo";
import *as data from "../fixtures/data.json"

describe('manipulations with Allo',()=> {

    const alloPage = new HackingAllo()

    beforeEach(()=> {
        alloPage.openAllo()
        Cypress.config('defaultCommandTimeout', 20000)
    })
    /* domashka 1*/
    it('Open allo', ()=> {
        alloPage.openAllo()
    })
    /* domashka 2*/
    it('Open magazyny', ()=> {
        alloPage.storesInHeaderClick()
        alloPage.assertStoreAddress()
    })
    /* domashka 3*/
    it('Filter smartphones', ()=> {
        alloPage.searchXiaomi(
            data.xiaomi
        )
        alloPage.assertItemQuantity()
        alloPage.searchSmartphones()
        alloPage.assertSmartphonesFilterSelected()
    })
    /* domashka 4*/
    it('Verify credit for Samsung from Mono', ()=> {
        alloPage.searchSamsung(
            data.samsung
        )
        alloPage.assertSamsungFound(
            data.samsung
        )
        alloPage.openItem(
            data.samsung
        )
        alloPage.creditTabClick()
        alloPage.findMonoCredit()
        alloPage.openDropDown()
        alloPage.selectEightPayments()
        alloPage.assertAmountEightPayments()
        alloPage.openDropDown()
        alloPage.selectThreePayments()
        alloPage.assertAmountThreePayments()
    })
})
