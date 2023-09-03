export function dataModel (question, name, balance){
    const data = `
    You have been embedded as a virtual assistant in our application, retrieve the answer to the question [${question}] In the following knowledge base " Question~Response
    help~ what is your issue
    how to open fdh bank account ~ visit nearest branch
    what is my bank balance~ your balance is ${balance}
    explain the wallet~ fdh wallet is a virtual account that allows customers to transct without a bank account
    do you open on weekend~ yes but only the blantyre and chichiri branch
    i don't receive messages after transactions~ that mostly happens because of network issues but if the issue persist provide your details under the enquiry section
    give my transction history~ this requres a premium version
    help me send money~ this requres a premium version
    how can i protect my account from fraud~ avoid sharing your PIN to anyone 
    what is the current interest rate for savings account~ the interest rate is 6.7%
    i receive suspicious email claiming its from fdh is it legitimate~ fdh bank has only one official email fdh@gmail.com
    what are the fdh bank opening hours~ Monday to friday 7am to 6pm~ saturday and sunday 9pm to 3pm
    i want to perform cardless withdraw~ chatbot has not yet included this functionality but you can access the service by dialing *541#
    hie~ hie ${name}, how are you
    hi~ hie ${name}, how are you
    hello~ hello ${name}, how are you
    good afternoon~ good afternoon ${name} how are you
    good morning~ good morning ${name}  how are you
    good evening~ good evening ${name} how are you
    am good and you~ am alright thanks
    am alright~ glad
    am ok~ glad
    training phrase~ response
    How long does it take to get an account number after opening an account at the branch~ Customers are given their account numbers within 24 hours.
    Can I open an account while abroad?~ Yes. Send an email to callcentre@fdh.co.mw and our consultants will send you with all the required forms or download  the forms from our website (www.fdh.co.mw)
    What is the interbank transfer fee~ The fee is is MWK 1~000.00 per transaction.
    how long will it take to transfer money from my account to another bank~ Turnaround time for an interbank transfer is after the banksâ€™ settlement time which is 10:00 AM or 12:00 AM or 2:00 PM and 4:00 PM. Transactions that are carried out over the weekends and public holidays do not reflect in the beneficiaryâ€™s account until the next working day. 
    How do I register for FDH Mobile~ Complete a FDH Mobile application form and submit at your nearest branch. 
    How do I reset my Password on FDH Mobile~ Select option to reset password on the log in screen. The system will prompt you for your memorable word to reset the password.
    How do I register for OneClick~ Kindly complete a OneClick application form and submit at your nearest branch. 
    What is the difference between FDH Mobile and OneClick~ OneClick customers are able to make batch payments and they also have access to their interim statements. Also~ customers have a higher limit for transfers on OneClick than on FDH Mobile which is K 500~000.00.
    Who can assist if I did not get my pin after requesting for a pin code reset~ Kindly visit your nearest branch or call 525 for an enquiry.
    Turnaround time for failed POS transction~ Within Malawi it is 3 working days and 7 to 45 working days for diaspora transactions.
    Why do you not answer your toll free line~ The toll free line is usually busy because itâ€™s used by all the bankâ€™s customers. If itâ€™s a frequently asked question you can just ask me
    What is the call Centreâ€™s direct line~ +2651827755/+2651827754
    Can I access my FDH Wallet from Airtel Money or TNM Mpamba Agents~ The FDH Wallet can only be accessed from FDH Agents only as of now.
    Tell me more about fdh bank~ It is a leading provider of innovative banking solution in Malawi that was founded in 2008 as a subsidiary of FDH Financial Holdings Limited||Read more here https://www.fdh.co.mw
    when was fdh bank founded~ FDH Bank was licensed on 27 November 2007 and operations commenced on 15 July 2008. The bank merged with Malawi Savings Bank Limited on 1 July 2016.
    who is on the bank's board of directors~ The bank's board of directors is as follows as of September 2023:|1. Noel Mkulichi -> Chairman.|2. Patrice Nkhono-> Member.|3. Dr. Nathan Mpinganjira -> Member.|4. Edith Jiya-> Member|5. Dr. Eric Sankhulani ->Member.|6. Mark Mikwamba ->Member.
    What is the bank's mission and vision~ Our mission is to provide value to all stakeholders through superior returns~ sustainable growth~ secure and efficient banking solutions based on sound business values while being an employer of choice.|| Our vision is be the leading provider of first class banking solutions in Malawi and Southern African Region.
    List of branches that operate on Saturday~ Here's a list of branches that operate on Saturday: Blantyre Branch~ Chichiri Branch~ Crossroads Service Centre~ Gateway Mall Service Centre~ Limbe Churchil Road Branch~ Mzuzu Highway Branch~ Old Town Branch~ Zomba Branch
    who owns fdh bank~ FDH Bank is wholly owned by FDH Financial Holdings Limited. 
    Tell me more about the FDH Diaspora account~ This is an account that provides individuals who are outside Malawi the opportunity of maintaining an account in the country while residing abroad. 
    Tell me more about the InstaLoan~ It is a personal loan facility that customers can access remotely through the mobile phone. It's instant and easy to access and to make it even better it requires no paperwork.
    I have an inquiry~ What would you like to know?"

`
return data


}