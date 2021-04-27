import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <ScrollView style={style.scrollContainer}>
        <View style={style.container}>
          <Text style={style.header}>Mobile App Privacy Policy</Text>
          <View style={style.paragraph}>
            <Text style={style.mainText}>Last modified: [DATE]</Text>
          </View>

          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>Introduction</Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldText}>
              StockSwap LLC (“<Text style={style.boldText}>Company</Text>” or “
              <Text style={style.boldText}>We</Text>”) respect your privacy and
              are committed to protecting it through our compliance with this
              policy. This policy describes:
            </Text>
          </View>
          <View style={style.indentSection}>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                The types of information we may collect or that you may provide
                when you download, install, register with, access, or use the
                StockSwap app (the “<Text style={style.boldText}>App</Text>”).
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Our practices for collecting, using, maintaining, protecting,
                and disclosing that information.
              </Text>
            </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              This policy applies only to information we collect in this App,
              and in email, text, and other electronic communications sent
              through this App.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              This policy DOES NOT apply to information that:
            </Text>
          </View>
          <View style={style.indentSection}>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                We collect offline or on any other Company apps or websites,
                including websites you may access through this App.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                You provide to or is collected by any third party (see{' '}
                <Text style={style.highlight}>
                  Third-Party Information Collection
                </Text>
                ).
              </Text>
            </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              Our websites and apps, and these other third parties may have
              their own privacy policies, which we encourage you to read before
              providing information on or through them.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              Please read this policy carefully to understand our policies and
              practices regarding your information and how we will treat it. If
              you do not agree with our policies and practices, do not download,
              register with, or use this App. By downloading, registering with,
              or using this App, you agree to this privacy policy. This policy
              may change from time to time (see{' '}
              <Text style={style.highlight}>Changes to Our Privacy Policy</Text>
              ). Your continued use of this App after we revise this policy
              means you accept those changes, so please check the policy
              periodically for updates.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>
              Children Under the Age of 16
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              The App is not intended for children under 16 years of age, and we
              do not knowingly collect personal information from children under
              16. If we learn we have collected or received personal information
              from a child under 16 without verification of parental consent, we
              will delete that information. If you believe we might have any
              information from or about a child under 16, please contact us at
              privacy@stockswap.us.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>
              Information We Collect and How We Collect It
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              We collect information from and about users of our App:
            </Text>
          </View>
          <View style={style.indentSection}>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Directly from you when you provide it to us.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Automatically when you use the App.
              </Text>
            </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextItalic}>
              Information You Provide to Us
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              When you download, register with, or use this App, we may ask you
              provide information:
            </Text>
          </View>
          <View style={style.indentSection}>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                By which you may be personally identified, such as name,
                username, financial information that you integrate into the App
                through Third-Party integrations, biographical information that
                you provide to the App in your sole discretion, or any other
                identifier by which you may be contacted online or offline (“
                <Text style={style.boldText}>personal information</Text>”);
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                That is about you but individually may not identify you, such as
                hashtags that describe you.
              </Text>
            </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>This information includes:</Text>
          </View>
          <View style={style.indentSection}>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Information that you provide by filling in forms in the App.
                This includes information provided at the time of registering to
                use the App, posting material, and requesting further services.
                We may also ask you for information when you report a problem
                with the App.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Records and copies of your correspondence (including email
                addresses and phone numbers), if you contact us.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Your responses to surveys that we might ask you to complete for
                research purposes
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Your search queries on the App.
              </Text>
            </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              You may also provide information for publication or display (“
              <Text style={style.boldText}>Posted</Text>”) on public areas of
              the app (collectively, “
              <Text style={style.boldText}>User Contributions</Text>”). Your
              User Contributions are Posted and transmitted to others at your
              own risk. Additionally, we cannot control the actions of third
              parties with whom you may choose to share your User Contributions.
              Therefore, we cannot and do not guarantee that your User
              Contributions will not be viewed by unauthorized persons.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextItalic}>
              Automatic Information Collection and Tracking
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              When you download, access, and use the App, it may use technology
              to automatically collect:
            </Text>
          </View>

          <View style={style.indentSection}>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                <Text style={style.boldText}>Usage Details.</Text> When you
                access and use the App, we may automatically collect certain
                details of your access to and use of the App, including traffic
                data, logs, and other communication data and the resources that
                you access and use on or through the App.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                <Text style={style.boldText}>Device Information.</Text> We may
                collect information about your mobile device and internet
                connection, including the device’s unique device identifier, IP
                address, operating system, browser type, mobile network
                information, and the device’s telephone number.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                <Text style={style.boldText}>
                  Stored Information and Files.
                </Text>{' '}
                The App also may access metadata and other information
                associated with other files stored on your device. This may
                include, for example, photographs, audio and video clips,
                personal contacts, and address book information.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                <Text style={style.boldText}>Location Information.</Text> This
                App does not collect real-time information about the location of
                your device.
              </Text>
            </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              If you do not want us to collect this information do not download
              the App or delete it from your device. For more information, see
              Choices about How We Use and Disclose Your Information.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextItalic}>
              Information Collection and Tracking Technologies
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              The technologies we use for automatic information collection may
              include:
            </Text>
          </View>
          <View style={style.indentSection}>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                <Text style={style.boldText}>
                  Cookies (or mobile cookies).
                </Text>{' '}
                A cookie is a small file placed on your smartphone. It may be
                possible to refuse to accept mobile cookies by activating the
                appropriate setting on your smartphone. However, if you select
                this setting you may be unable to access certain parts of our
                App.
              </Text>
            </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextItalic}>
              Third-Party Information Collection
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              When you use the App or its content, certain third parties may use
              automatic information collection technologies to collect
              information about you or your device. These third parties may
              include:
            </Text>
          </View>
          <View style={style.indentSection}>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Analytics companies.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Your mobile device manufacturer.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Your mobile service provider.
              </Text>
            </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              They may use this information to provide you with interest-based
              (behavioral) advertising or other targeted content.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              We do not control these third parties’ tracking technologies or
              how they may be used. If you have any questions about an
              advertisement or other targeted content, you should contact the
              responsible provider directly.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>
              How We Use Your Information
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              We use information that we collect about you or that you provide
              to us, including any personal information, to{' '}
            </Text>
          </View>

          <View style={style.indentSection}>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Provide you with the App and its contents, and any other
                information, products or services that you request from us.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Fulfill any other purpose for which you provide it.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Carry out our obligations and enforce our rights arising from
                any contracts entered into between you and us, including for
                billing and collection.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Notify you when App updates are available, and of changes to any
                products or services we offer or provide though it.
              </Text>
            </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              The usage information we collect helps us to improve our App and
              to deliver a better and more personalized experience by enabling
              us to:
            </Text>
          </View>
          <View style={style.indentSection}>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Estimate our audience size and usage patterns.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Store information about your preferences, allowing us to
                customize our App according to your individual interests.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Speed up your searches.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                Recognize you when you use the App.
              </Text>
            </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              We may also use your information to contact you about our own
              goods and services that may be of interest to you. If you do not
              want us to use your information in this way, please check the
              relevant box located on the form on which we collect your data.
              For more information, see{' '}
              <Text style={style.highlight}>
                Your Choices About Our Collection, Use, and Disclosure of Your
                Information.
              </Text>
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>
              Disclosure of Your Information
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              We may disclose aggregated information about our users, and
              information that does not identify any individual or device,
              without restriction.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              In addition, we may disclose personal information that we collect
              or you provide:
            </Text>
          </View>
          <View style={style.indentSection}>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                To our subsidiaries and affiliates.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                To contractors, service providers, and other third parties we
                use to support our business.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                To a buyer or other successor in the event of a merger,
                divestiture, restructuring, reorganization, dissolution, or
                other sale or transfer of some or all of StockSwap LLC’s assets,
                whether as a going concern or as part of bankruptcy,
                liquidation, or similar proceeding, in which personal
                information held by StockSwap LLC’s about our App users is among
                the assets transferred.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                To fulfill the purpose for which you provide it.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                For any other purpose disclosed by us when you provide the
                information.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                With your consent.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                To comply with any court order, law, or legal process, including
                to respond to any government or regulatory request.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                To enforce our rights arising from any contracts entered into
                between you and us, including the App EULA and our Terms.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                If we believe disclosure is necessary or appropriate to protect
                the rights, property, or safety of StockSwap LLC, our customers
                or others.
              </Text>
            </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>
              Your Choices About Our Collection, Use, and Disclosure of Your
              Information
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              We strive to provide you with choices regarding the personal
              information you provide to us. This section describes mechanisms
              we provide for you to control certain uses and disclosures of over
              your information.
            </Text>
          </View>
          <View style={style.indentSection}>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                <Text style={style.boldText}>Tracking Technologies.</Text> You
                can set your browser to refuse all or some browser cookies, or
                to alert you when cookies are being sent. If you disable or
                refuse cookies or block the use of other tracking technologies,
                some parts of the App may then be inaccessible or not function
                properly.
              </Text>
            </View>
            <View style={style.paragraph}>
              <Text style={style.mainText}>
                {'\u2B24  '}
                <Text style={style.boldText}>Promotion by the Company. </Text>
                If you do not want us to use your contact information to promote
                our own products and/or services, you can opt-out by sending us
                an email stating your request to privacy@stockswap.us.
              </Text>
            </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              We do not control third parties’ collection or use of your
              information to serve interest-based advertising. However these
              third parties may provide you with ways to choose not to have your
              information collected or used in this way. You can opt out of
              receiving targeted ads from members of the Network Advertising
              Initiative (“<Text style={style.boldText}>NAI</Text>”) on the
              NAI’s website.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>
              Accessing and Correcting Your Personal Information
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              You can review and change your personal information by logging
              into the App and visiting your account profile page.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              If you delete your User Contributions from the App, copies of your
              User Contributions may remain viewable in cached and archived
              pages, or might have been copied or stored by other App users.
              Proper access and use of information provided on the App,
              including User Contributions, is governed by our terms of use
              <TouchableOpacity
                onPress={() => this.props.screenSelect('agreement')}>
                <Text style={style.link}>[LINK TO TERMS OF USE].</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>Data Security</Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              We have implemented measures designed to secure your personal
              information from accidental loss and from unauthorized access,
              use, alteration, and disclosure. All information you provide to us
              is stored on our secure servers behind firewalls.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              The safety and security of your information also depends on you.
              Where we have given you (or where you have chosen) a password for
              access to certain parts of our App, you are responsible for
              keeping this password confidential. We ask you not to share your
              password with anyone. We urge you to be careful about giving out
              information in public areas of the App like message boards. The
              information you share in public areas may be viewed by any user of
              the App.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              Unfortunately, the transmission of information via the internet
              and mobile platforms is not completely secure. Although we do our
              best to protect your personal information, we cannot guarantee the
              security of your personal information transmitted through our App.
              Any transmission of personal information is at your own risk. We
              are not responsible for circumvention of any privacy settings or
              security measures we provide.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>
              Changes to Our Privacy Policy
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              We may update our privacy policy from time to time. If we make
              material changes to how we treat our users’ personal information,
              we will post the new privacy policy on this page with a notice
              that the privacy policy has been updated and/or an in-App alert
              the first time you use the App after we make the change.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              The date the privacy policy was last revised is identified at the
              top of the page. You are responsible for ensuring we have an
              up-to-date active and deliverable email address for you and for
              periodically visiting this privacy policy to check for any
              changes.
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>Contact Information</Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
              To ask questions or comment about this privacy policy and our
              privacy practices, contact us at: privacy@stockswap.us.
            </Text>
          </View>
          <View style={style.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.screenSelect('agreement')}>
              <Text style={style.agreeButton}>Back to User Agreement</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#323e5b',
  },
  container: {
    flex: 1,
    padding: moderateScale(8),
    backgroundColor: '#323e5b',
    paddingHorizontal: moderateScale(30),
  },
  header: {
    color: 'white',
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
  },
  mainText: {
    color: 'white',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Medium',
  },
  paragraph: {
    marginVertical: moderateScale(6),
  },
  indentSection: {
    marginLeft: moderateScale(18),
  },
  indentTwice: {
    marginLeft: moderateScale(28),
  },
  boldText: {
    color: 'white',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Bold',
  },
  boldTextItalic: {
    color: 'white',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'italic',
  },
  boldTextUnderline: {
    color: 'white',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Bold',
    textDecorationLine: 'underline',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  highlight: {
    backgroundColor: 'lightgrey',
  },
  link: {
    backgroundColor: 'yellow',
  },
  buttonContainer: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  agreeButton: {
    backgroundColor: '#8B64FF',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(240),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(17),
    fontWeight: 'bold',
  },
});
