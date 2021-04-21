import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { moderateScale, verticalScale, scale } from "../../util/responsiveFont";

export default class TermsAndConditions extends Component {
  render() {
    const { handleTerms, handleCheck } = this.props;

    //setTermsVersion to current version, close modal, toggleCheck true
    const handleFormikTermsAgree = () => {
      this.props.props.setFieldValue("termsVersion", "Version 1");
      handleTerms(false);
      handleCheck(true);
    };

    //setTermsVersion to "", close modal, toggleCheck false
    const handleFormikTermsCancel = () => {
      this.props.props.setFieldValue("termsVersion", "");
      handleTerms(false);
      handleCheck(false);
    };

    return (
      <ScrollView>
        <View style={style.container}>
          <Text style={style.header}>            
            Mobile Application End User License Agreement
          </Text>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              This Mobile Application End User License Agreement (“
              <Text style={style.boldText}>Agreement</Text>”) is a binding
              agreement between you (“
              <Text style={style.boldText}>End User</Text>” or “
              <Text style={style.boldText}>you</Text>”) and StockSwap LLC (“
              <Text style={style.boldText}>Company</Text>”). This Agreement
              governs your use of the StockSwap application, (including all
              related documentation, the “
              <Text style={style.boldText}>Application</Text>”). The Application
              is licensed, not sold, to you.
            </Text>
          </View>

          <View style={style.paragraph}>
            <Text style={style.mainText}>
              BY USING THE APPLICATION, YOU (A) ACKNOWLEDGE THAT YOU HAVE READ
              AND UNDERSTAND THIS AGREEMENT; (B) REPRESENT THAT YOU ARE OF LEGAL
              AGE TO ENTER INTO A BINDING AGREEMENT; AND (C) ACCEPT THIS
              AGREEMENT AND AGREE THAT YOU ARE LEGALLY BOUND BY ITS TERMS. IF
              YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE APPLICATION.
            </Text>
          </View>

          <Text style={style.mainText}>
            1. <Text style={style.underline}>License Grant.</Text> Subject to
            the terms of this Agreement, Company grants you a limited,
            non-exclusive, and nontransferable license to:
          </Text>
          
          <View style={style.indentSection}>
            <View style={style.paragraph}>
            <Text style={style.mainText}>              
              (a) download, install, and use the Application for your personal,
              non-commercial use on a single mobile or tablet device owned or
              otherwise controlled by you (“<Text style={style.boldText}>Mobile Device”</Text>) strictly in
              accordance with the Application's documentation; and
            </Text>
            </View>
            <View style={style.paragraph}>
            <Text style={style.mainText}>              
              (b) Access and use on such Mobile Device the Content and Services
              (as defined in <Text style={style.highlight}>Section 5</Text>) made available in or otherwise
              accessible through the Application, strictly in accordance with
              this Agreement and the Terms of Use applicable to such Content and
              Services as set forth in <Text style={style.highlight}>Section 5</Text>.
            </Text>
            </View>
          </View>
                <View style={style.paragraph}>
          <Text style={style.mainText}>
            2. <Text style={style.underline}>License Restrictions.</Text> You shall not:
          </Text>
          </View>
          <View style={style.indentSection}>
          <View>
          <Text style={style.mainText}>            
            (a) copy the Application, except as expressly permitted by this
            license;
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>            
            (b) modify, translate, adapt, or otherwise create derivative works
            or improvements, whether or not patentable, of the Application;
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>            
            (c) reverse engineer, disassemble, decompile, decode, or otherwise
            attempt to derive or gain access to the source code of the
            Application or any part thereof;
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>            
            (d) remove, delete, alter, or obscure any trademarks or any
            copyright, trademark, patent, or other intellectual property or
            proprietary rights notices from the Application, including any copy
            thereof;
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>            
            (e) rent, lease, lend, sell, sublicense, assign, distribute,
            publish, transfer, or otherwise make available the Application, or
            any features or functionality of the Application, to any third party
            for any reason, including by making the Application available on a
            network where it is capable of being accessed by more than one
            device at any time;
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>            
            (f) remove, disable, circumvent, or otherwise create or implement
            any workaround to any copy protection, rights management, or
            security features in or protecting the Application; or
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>            
            (g) use the Application in any manner that violates applicable laws
            and regulations, including but not limited to
          </Text>
          </View>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            3. <Text style={style.underline}>Reservation of Rights.</Text> You acknowledge and agree that the
            Application is provided under license, and not sold, to you. You do
            not acquire any ownership interest in the Application under this
            Agreement, or any other rights thereto other than to use the
            Application in accordance with the license granted, and subject to
            all terms, conditions, and restrictions, under this Agreement.
            Company and its licensors and service providers reserve and shall
            retain their entire right, title, and interest in and to the
            Application, including all copyrights, trademarks, and other
            intellectual property rights therein or relating thereto, except as
            expressly granted to you in this Agreement.
          </Text>
          </View>

          <View style={style.paragraph}>
          <Text style={style.mainText}>
            4. <Text style={style.underline}>Collection and Use of Your Information.</Text> You acknowledge that when
            you download, install, or use the Application, Company may use
            automatic means (including, for example, cookies and web beacons) to
            collect information about your Mobile Device and about your use of
            the Application. You also may be required to provide certain
            information about yourself as a condition to downloading,
            installing, or using the Application or certain of its features or
            functionality, and the Application may provide you with
            opportunities to share information about yourself with others. All
            information we collect through or in connection with this
            Application is subject to our Privacy Policy <Text style={style.link}>[INSERT AS LINK TO
            MOBILE APP PRIVACY POLICY].</Text> By downloading, installing, using, and
            providing information to or through this Application, you consent to
            all actions taken by us with respect to your information in
            compliance with the Privacy Policy.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            5. <Text style={style.underline}>Content and Services.</Text> The Application may provide you with access
            to Company's website located at stockswap.us (the “<Text style={style.boldText}>Website</Text>”) and
            products and services accessible thereon, and certain features,
            functionality, and content accessible on or through the Application
            may be hosted on the Application and/or Website (collectively,
            “<Text style={style.boldText}>Content and Services</Text>”). Your access to and use of such Content and
            Services are governed the Terms of Use and Privacy Policies located
            at <Text style={style.link}>[TERMS OF USE LINK]</Text> and <Text style={style.link}>[PRIVACY POLICY LINKS]</Text>, which are
            incorporated herein by this reference. Your access to and use of
            such Content and Services may require you to acknowledge your
            acceptance of such Terms of Use and Privacy Policy and/or to
            register with the Website, and your failure to do so may restrict
            you from accessing or using certain of the Application's features
            and functionality. Any violation of such Terms of Use will also be
            deemed a violation of this Agreement.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            6. <Text style={style.underline}>Geographic Restrictions.</Text> The Content and Services are based in
            the state of Missouri in the United States and provided for access
            and use only by persons located in the United States. You
            acknowledge that you may not be able to access all or some of the
            Content and Services outside of the United States and that access
            thereto may not be legal by certain persons or in certain countries.
            If you access the Content and Services from outside the United
            States, you are responsible for compliance with local laws.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            7. <Text style={style.underline}>Updates.</Text> Company may from time to time in its sole discretion
            develop and provide Application updates, which may include upgrades,
            bug fixes, patches, other error corrections, and/or new features
            (collectively, including related documentation, “<Text style={style.boldText}>Updates</Text>”). Updates
            may also modify or delete in their entirety certain features and
            functionality. You agree that Company has no obligation to provide
            any Updates or to continue to provide or enable any particular
            features or functionality. Based on your Mobile Device settings,
            when your Mobile Device is connected to the internet either:
          </Text>
          </View>
          <View style={style.indentSection}>
            <View style={style.paragraph}>
          <Text style={style.mainText}>
            (a) the Application will automatically download and install all
            available Updates; or
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            (b) you may receive notice of or be prompted to download and install
            available Updates.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            You shall promptly download and install all Updates and acknowledge
            and agree that the Application or portions thereof may not properly
            operate should you fail to do so. You further agree that all Updates
            will be deemed part of the Application and be subject to all terms
            and conditions of this Agreement.
          </Text>
          </View>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            8. <Text style={style.underline}>Third-Party Materials.</Text> The Application may display, include, or
            make available third-party content (including data, information,
            applications, and other products, services, and/or materials) or
            provide links to third-party websites or services, including through
            third-party advertising (“<Text style={style.boldText}>Third-Party Materials</Text>”). You acknowledge
            and agree that Company is not responsible for Third-Party Materials,
            including their accuracy, completeness, timeliness, validity,
            copyright compliance, legality, decency, quality, or any other
            aspect thereof. Company does not assume and will not have any
            liability or responsibility to you or any other person or entity for
            any Third-Party Materials. Third-Party Materials and links thereto
            are provided solely as a convenience to you, and you access and use
            them entirely at your own risk and subject to such third parties'
            terms and conditions.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>9. <Text style={style.underline}>Term and Termination.</Text></Text>
          </View>
          <View style={style.indentSection}>
           <View style={style.paragraph}>
          <Text style={style.mainText}>            
            (a) The term of Agreement commences when you download the
            Application and will continue in effect until terminated by you or
            Company as set forth in this <Text style={style.highlight}>Section 9.</Text>
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            
            (b) You may terminate this Agreement by deleting the Application and
            all copies thereof from your Mobile Device.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            
            (c) Company may terminate this Agreement at any time without notice.
            In addition, this Agreement will terminate immediately and
            automatically without any notice if you violate any of the terms and
            conditions of this Agreement.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}> (d) Upon termination:</Text>
          </View>
          <View style={style.paragraph}>
            <View style={style.indentTwice}>
          <Text style={style.mainText}>
            
          (i) all rights granted to you under this Agreement will also
            terminate; and
          </Text>
          
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            
            (ii) you must cease all use of the Application and delete all copies
            of the Application from your Mobile Device and account.
          </Text>
          </View>
          
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            
            (e) Termination will not limit any of Company's rights or remedies
            at law or in equity.
          </Text>
          </View>
          </View>
          </View>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            10. <Text style={style.underline}>Disclaimer of Warranties.</Text> THE APPLICATION IS PROVIDED TO END
            USER “AS IS” AND WITH ALL FAULTS AND DEFECTS WITHOUT WARRANTY OF ANY
            KIND. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, COMPANY,
            ON ITS OWN BEHALF AND ON BEHALF OF ITS AFFILIATES AND ITS AND THEIR
            RESPECTIVE LICENSORS AND SERVICE PROVIDERS, EXPRESSLY DISCLAIMS ALL
            WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, WITH
            RESPECT TO THE APPLICATION, INCLUDING ALL IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
            NON-INFRINGEMENT, AND WARRANTIES THAT MAY ARISE OUT OF COURSE OF
            DEALING, COURSE OF PERFORMANCE, USAGE, OR TRADE PRACTICE. WITHOUT
            LIMITATION TO THE FOREGOING, COMPANY PROVIDES NO WARRANTY OR
            UNDERTAKING, AND MAKES NO REPRESENTATION OF ANY KIND THAT THE
            APPLICATION WILL MEET YOUR REQUIREMENTS, ACHIEVE ANY INTENDED
            RESULTS, BE COMPATIBLE, OR WORK WITH ANY OTHER SOFTWARE,
            APPLICATIONS, SYSTEMS, OR SERVICES, OPERATE WITHOUT INTERRUPTION,
            MEET ANY PERFORMANCE OR RELIABILITY STANDARDS, OR BE ERROR-FREE, OR
            THAT ANY ERRORS OR DEFECTS CAN OR WILL BE CORRECTED.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF OR LIMITATIONS ON
            IMPLIED WARRANTIES OR THE LIMITATIONS ON THE APPLICABLE STATUTORY
            RIGHTS OF A CONSUMER, SO SOME OR ALL OF THE ABOVE EXCLUSIONS AND
            LIMITATIONS MAY NOT APPLY TO YOU.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            11. <Text style={style.underline}>Limitation of Liability.</Text> TO THE FULLEST EXTENT PERMITTED BY
            APPLICABLE LAW, IN NO EVENT WILL COMPANY OR ITS AFFILIATES, OR ANY
            OF ITS OR THEIR RESPECTIVE LICENSORS OR SERVICE PROVIDERS, HAVE ANY
            LIABILITY ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE
            THE APPLICATION OR THE CONTENT AND SERVICES FOR:
          </Text>
          </View>
          <View style={style.indentSection}>
          <View style={style.paragraph}>
            
          <Text style={style.mainText}>            
            (a) PERSONAL INJURY, PROPERTY DAMAGE, LOST PROFITS, COST OF
            SUBSTITUTE GOODS OR SERVICES, LOSS OF DATA, LOSS OF GOODWILL,
            BUSINESS INTERRUPTION, COMPUTER FAILURE OR MALFUNCTION, OR ANY OTHER
            CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL, OR PUNITIVE
            DAMAGES.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            
            (b) DIRECT DAMAGES IN AMOUNTS THAT IN THE AGGREGATE EXCEED THE
            AMOUNT ACTUALLY PAID BY YOU FOR THE APPLICATION.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            
            THE FOREGOING LIMITATIONS WILL APPLY WHETHER SUCH DAMAGES ARISE OUT
            OF BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE AND
            REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR COMPANY WAS
            ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO
            NOT ALLOW CERTAIN LIMITATIONS OF LIABILITY SO SOME OR ALL OF THE
            ABOVE LIMITATIONS OF LIABILITY MAY NOT APPLY TO YOU.
          </Text>
          </View>
          </View>
          
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            12. <Text style={style.underline}>Indemnification.</Text> You agree to indemnify, defend, and hold
            harmless Company and its officers, directors, employees, agents,
            affiliates, successors, and assigns from and against any and all
            losses, damages, liabilities, deficiencies, claims, actions,
            judgments, settlements, interest, awards, penalties, fines, costs,
            or expenses of whatever kind, including reasonable attorneys' fees,
            arising from or relating to your use or misuse of the Application or
            your breach of this Agreement, including but not limited to the
            content you submit or make available through this Application.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            13. <Text style={style.underline}>Export Regulation.</Text> The Application may be subject to US export
            control laws, including the Export Control Reform Act and its
            associated regulations. You shall not, directly or indirectly,
            export, re-export, or release the Application to, or make the
            Application accessible from, any jurisdiction or country to which
            export, re-export, or release is prohibited by law, rule, or
            regulation. You shall comply with all applicable federal laws,
            regulations, and rules, and complete all required undertakings
            (including obtaining any necessary export license or other
            governmental approval), prior to exporting, re-exporting, releasing,
            or otherwise making the Application available outside the US.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            14. <Text style={style.underline}>Severability.</Text> If any provision of this Agreement is illegal or
            unenforceable under applicable law, the remainder of the provision
            will be amended to achieve as closely as possible the effect of the
            original term and all other provisions of this Agreement will
            continue in full force and effect.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            15. <Text style={style.underline}>Governing Law.</Text> This Agreement is governed by and construed in
            accordance with the internal laws of the State of Missouri without
            giving effect to any choice or conflict of law provision or rule.
            Any legal suit, action, or proceeding arising out of or related to
            this Agreement or the Application shall be instituted exclusively in
            the federal courts of the United States or the courts of the State
            of Missouri in each case located in the County of St. Louis. You
            waive any and all objections to the exercise of jurisdiction over
            you by such courts and to venue in such courts.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            16. <Text style={style.underline}>Limitation of Time to File Claims.</Text> ANY CAUSE OF ACTION OR CLAIM
            YOU MAY HAVE ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE
            APPLICATION MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF
            ACTION ACCRUES OTHERWISE SUCH CAUSE OF ACTION OR CLAIM IS
            PERMANENTLY BARRED.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            17. <Text style={style.underline}>Entire Agreement.</Text> This Agreement, our Terms, and our Privacy
            Policies constitute the entire agreement between you and Company
            with respect to the Application and supersede all prior or
            contemporaneous understandings and agreements, whether written or
            oral, with respect to the Application.
          </Text>
          </View>
          <View style={style.paragraph}>
          <Text style={style.mainText}>
            18. <Text style={style.underline}>Waiver.</Text> No failure to exercise, and no delay in exercising, on
            the part of either party, any right or any power hereunder shall
            operate as a waiver thereof, nor shall any single or partial
            exercise of any right or power hereunder preclude further exercise
            of that or any other right hereunder. In the event of a conflict
            between this Agreement and any applicable purchase or other terms,
            the terms of this Agreement shall govern.
          </Text>
          </View>

          <View style={style.buttonContainer}>
            <TouchableOpacity onPress={() => handleFormikTermsCancel()}>
              <Text style={style.agreeButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFormikTermsAgree()}>
              <Text style={style.agreeButton}>I agree</Text>
            </TouchableOpacity>
          </View>
          </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(8),
    backgroundColor: "#323e5b",
    paddingHorizontal: moderateScale(30),
    marginVertical: moderateScale(8),
  },
  header: {
    color: "white",
    fontSize: moderateScale(20),
    fontFamily: "Montserrat-Bold",
  },
  mainText: {
    color: "white",
    fontSize: moderateScale(14),
    fontFamily: "Montserrat-Medium",
  },
  paragraph: {
    marginVertical: moderateScale(6),
  },
  indentSection: {
    marginLeft: moderateScale(18),
  },
  indentTwice:{
    marginLeft: moderateScale(28),
  },
  boldText: {
    color: "white",
    fontSize: moderateScale(14),
    fontFamily: "Montserrat-Bold",
  },
  underline: {
    textDecorationLine: "underline",
  },
  highlight:{
    backgroundColor:'lightgrey'
  },
  link:{
    backgroundColor:'yellow'
  },
  buttonContainer: {
    marginTop: moderateScale(10),
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  agreeButton: {
    backgroundColor: "#8B64FF",
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(150),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(17),
    fontWeight: "bold",
  },
});
