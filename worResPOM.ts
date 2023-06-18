import { By } from "selenium-webdriver";
import{BasePage} from './basePage'
export class worResPOM extends BasePage {
    //selectors
    /* When I do the pricing it will need to be structured like 
    let i = the thing I'm setting the array to as my selector*/

    FreeChrchMedLib: By=By.xpath('(//h4[@class="et_pb_module_header"])[1]');
//FreeChrchMedLib is the first one in the array, there are 4 free options 
//then the 5th option on that array is the first under the paid church media libraries 
//https://www.worshipresources.church/church-resources/church-media-libraries/
    schCallHead: By=By.xpath('(//a[@class="et_pb_button et_pb_button_0_tb_header et_hover_enabled et_pb_bg_layout_light"])');
    schCallMainArea: By=By.xpath('(//a[@href="/free30"])[7]')
    /**The above is an array 1-7 starting from the main section below the header */

    //constructor


    //methods

}