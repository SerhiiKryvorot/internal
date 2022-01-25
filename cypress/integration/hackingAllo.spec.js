import {HackingAllo} from "../support/hackingAllo";

describe('manipulations with Allo',()=> {

    const alloPage = new HackingAllo()

    beforeEach(()=> {
        alloPage.openAllo()
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
        alloPage.searchXiaomi()
        alloPage.assertItemQuantity()
        alloPage.searchSmartphones()
        alloPage.assertSmartphonesFilterSelected()
    })
})
