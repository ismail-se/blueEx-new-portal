import { Card, CardContent } from "@material-ui/core";
import Layout from "../components/Layout";
import Head from "next/head";
import { parseCookies } from "../helpers/";
import { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";

const Terms = ({ data }) => {
  const [{ acno }, dispatch] = useStateValue();
  const res = JSON.parse(data.user);

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_USER,
      acno: res.acno,
      b_usrId: res.b_usrId,
      name: res.name,
      acc_type: res.type,
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>
          blueEX Booking App - The one stop shop to access all blueEX services
        </title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div>
        <h1 className="heading">Terms & Conditions</h1>
        <Card variant="outlined" className="mt-[2rem] p-[2.2rem]">
          <CardContent className="text-sm  text-[#575962] data">
            <h6>1. Shipping Procedure</h6>

            <ol>
              <li>
                Shipments will be picked up if booked from blueEX Customer
                Portal, Booking App or API Service only.
              </li>
              <li>Minimum chargeable weight is 0.5 kg.</li>
              <li>13% GST applicable on above mentioned rates.</li>
              <li>
                In case if a customer refuses to accept the shipment due to any
                reason, that shipment will be returned to the merchant against a
                new consignment note and return charges will be charged.
              </li>
              <li>
                If shipment volumetric weight exceeds the actual weight,
                shipment weight will be calculated as Follows (all measurements
                in centimeters) : (Length x height x width / 5000)
              </li>
              <li>
                No shipment processed under COD Procedure is insured by blueEX
                unless the merchant has specifically opted for Insurance.
              </li>
              <li>
                Packaging: You are responsible for packing of your goods. Please
                make sure your product is properly packed. Ensuring the safety
                during their transit as per nature of the goods. Any damage to
                the pro duct due to poor packaging will not be our
                responsibility.
              </li>
              <li>
                Documents required for account opening:
                <ul>
                  <li>Bank account title (to issue your Cheque).</li>
                  <li>Client’s name / corporate name.</li>
                  <li>Office address / pick up address.</li>
                  <li>CNIC copy.</li>
                  <li>Contact person.</li>
                  <li>Designation.</li>
                  <li>Contact numbers and email id.</li>
                </ul>
              </li>
            </ol>

            <h6>2. LIABILITY AND LIMITATION OF DAMAGES</h6>

            <ol>
              <li>
                UNS will not be responsible for any shortages claimed by the
                consignee. This is the responsibility of the client to ensure
                exact number of items inside the parcel as the quantity inside
                the parcel is not known to UNS.
              </li>
              <li>
                The client is responsible for packing of goods to ensure the
                safety during their transit as per nature of the goods. Any
                damage to the product due to poor packaging will not be the
                responsibility of UNS.
              </li>
            </ol>

            <h6>3. NOTICE OF CLAIM AND FILING OF SUIT</h6>

            <ol>
              <li>
                Claim will not be admissible for damages to the shipment. Any
                kind of damages during transit will be the responsibility of the
                client. Client will be responsible for proper packing of their
                fragile and sensitive products.
              </li>
              <li>
                Claim will only be admissible for shipments LOST IN TRANSIT
                WITHIN PAKISTAN DUE TO ACCIDENT, THEFT, SNATCHING and ROBERRY.
                Claims will not be admissible in case seal is broken / torn of
                the packages / flyers
              </li>
              <li>
                UNS will not be responsible for any shortages claimed by the
                consignee. This is the responsibility of the client to ensure
                exact number of items inside the parcel as the quantity inside
                the parcel is not known to UNS. No claims will be entertained if
                a shipment is delivered to the consignee in acceptable
                condition.
              </li>
              <li>
                Claim will not be admissible for damages to the shipment. Any
                kind of damages during transit will be the responsibility of the
                client. Client will be responsible for proper packing of their
                fragile and sensitive products.
              </li>
              <li>
                UNS’s settlement of claim against a shipment cannot be more than
                the retail value of the product(s) being shipped. For insured
                shipments, claim will be acceptable to the maximum limit of
                insured value not exceeding the insured value declared by the
                client on the consignment note. The Insured declared value will
                be the basis of claim settlement. Claim will only be entertained
                when the insurance premium as applicable has been fully paid by
                the client.
              </li>
              <li>
                For insured shipments, the client must accept insurance as per
                acceptance terms and conditions of UNS before the shipment is
                handed over to UNS Company. No eligibility will be entertained
                after the shipment has been booked.
              </li>
              <li>
                Claim will not be admissible for damages to any goods including
                electronic equipment, LCD, LED etc. Client will be responsible
                for proper packing of these kinds of products.
              </li>
              <li>
                Claim will not be admissible if shipment is lost due to:
                <ul>
                  <li>War, Strike Riots,</li>
                  <li>Terrorism</li>
                  <li>Explosions</li>
                  <li>Earthquake Fire and shock</li>
                </ul>
              </li>
              <li>
                The legitimate claim will be settled within two weeks’ time from
                the date of occurrence of the incident.
              </li>
              <li>
                Proof of delivery, if required by the customer, cannot be
                provided for shipments that were booked 90 days before said
                proof of delivery is requested.
              </li>
            </ol>

            <h6>4. LIABILITY FOR CONSEQUENTIAL DAMAGES</h6>

            <ol>
              <li>
                UNS shall not be liable for any loss of profit or special,
                indirect, or consequential damages of any kind.
              </li>
            </ol>

            <h6>5. CONDITIONS OF CARRIAGE</h6>

            <ol>
              <li>
                Goods are carried under the rules relating to liability
                established by Carriage By Air Act - 1934 (XXX of 1934) as
                adopted and modified by the Central Government of Pakistan for,
                domestic carriage 14th March, 4962 (hereinafter called "The Act'
                and carriage under this consignment note and other services
                performed by carrier are further subject to:
                <br />
                Attention of the shippers is particularly invited to the
                following conditions:
                <ul>
                  <li>
                    The consignor must furnish such information and documents as
                    are necessary to meet formalities of custom, octroi or
                    police before the cargo can be delivered to the consignee.
                    The consignor is liable to the carrier for any damage
                    occasioned by the absence, insufficiency or irregularity of
                    any such information or documents.
                  </li>
                  <li>
                    The consignor is responsible for the correctness of the
                    particulars and statements relating to the cargo which he
                    inserts in the air consignment note.
                  </li>
                </ul>
              </li>
              <li>
                Receipt by the person entitled to delivery of cargo without
                complaint is prima-facie evidence that the same has been
                delivered in good condition and in accordance with the contract
                of carriage. Except as the act or other applicable law may
                otherwise require:
                <ul>
                  <li>
                    Carrier is not liable to the shipper or to any other person
                    for any damage, delay or loss of what so-ever nature arising
                    out of or in connection with the carriage of the goods,
                    unless such damage is proved to have been caused by the
                    negligence or willful fault of the carrier and there has
                    been no contributory negligence of the shipper or consignee
                    or other claimant.
                  </li>
                  <li>
                    Carrier is not liable for any damage directly or indirectly
                    arising out of compliance with laws, government regulations,
                    order or requirements or from cause beyond carrier's
                    control.
                  </li>
                  <li>
                    In the carriage of cargo the liability of the carrier in
                    respect of the' destruction, loss or damage is limited to a
                    sum of Rs.88.20 Per Kg., unless the shipper has made, at the
                    time when the cargo was handed over to the carrier, a
                    special declaration of the value at delivery and has paid a
                    supplementary sum. In the event carrier's liability for
                    compensation shall not exceed shipper's declared value.
                  </li>
                  <li>
                    It is agreed that carrier's liability for damage occasioned
                    by delay in carriage of goods shall be limited to the actual
                    damage which may be proved to have been sustained due to
                    such delay or double the sum paid for carriage, whichever
                    amount is smaller.
                  </li>
                  <li>
                    Carrier shall not be liable under any circumstances for
                    damage to or destruction of a consignment cause by or as a
                    result of properly contained therein and shipper, own and
                    consignee whose property shall cause any damage to or
                    destruction of another consignment or any property of
                    carrier, shall indemnify carrier for all losses and expenses
                    incurred by carrier as a result thereof. Goods which are
                    likely to endanger aircraft, person or property may be
                    abandoned or destroyed by carrier at any time without any
                    liability therefore attaching to carrier.
                  </li>
                </ul>
              </li>
              <li>
                That the carrier reserves the right to check at the time of
                acceptance or delivery any cargo tendered to him for carriage to
                ascertain its contents.
              </li>
              <li>
                In case of damage of cargo, the person entitled to delivery must
                complain to the carrier forthwith after the discovery of the
                damage and in no case later than seven days from the date of
                receipt of cargo. In case of delay the complaint must be made at
                the latest within fourteen clays from the date on which the
                cargo has been placed at his disposal. Every complaint must be
                made by notice in writing dispatched within the time stated
                above, but failing complaint within aforesaid time, no action
                shall lie against the carrier.
              </li>
              <li>
                No. agent, servant or representative of carrier has authority to
                alter, modify or waive any provision of this contract.
              </li>
              <li>
                The execution of this consignment note is prima-facie evidence
                of conclusion of contract between the carrier and the consignor.
              </li>
            </ol>

            <h6>BLUEEX Customer Registration Form</h6>

            <ol>
              <p>
                The Shipper/Client acknowledges and accepts these terms and
                conditions and relieves Universal Network Systems (Pvt.) Limited
                (“BLUEEX”) from any liabilities, responsibilities, claims,
                proceedings, suits, etc. against any damage, loss or expense
                suffered in connection with the services hereunder and also
                agreeing that BLUEEX will only be responsible for the carriage
                of document/parcel which is the only function and responsibility
                of BLUEEX. By signing this form, the client confirms that he has
                understood and agrees on all the rates, notes and terms and
                conditions stated on this and attached page of this agreement
                and any other annexure(s) attached.
              </p>
              <ol>
                <li>
                  BLUEEX Consignment Note: The Consignment Note of BLUEEX (CN)
                  is non-negotiable and the Shipper/Sender acknowledges that it
                  has been prepared by the Shipper/Sender or by BLUEEX staff on
                  behalf of the Shipper. The Shipper/Client confirms that all
                  the information provided to BLUEEX while booking the shipment
                  are complete and correct including Shippers and Consignee
                  details, goods value declaration etc. In case of any incorrect
                  information or declaration in the CN, the Shipper/Client
                  acknowledges that BLUEEX will be absolved from any liability
                  or responsibility pertaining to loss, damage or expense
                  suffered by the Shipper/Client.
                </li>
                <li>
                  No Variation: These terms and conditions are applicable on all
                  courier and logistics services provided by BLUEEX to the
                  Shipper/Client hereunder. No employee, franchisee, agent of
                  BLUEEX or anyone else has any authority to change any of these
                  terms and conditions, or make any promise on behalf of BLUEEX
                  which is in addition to or conflict with these Terms and
                  Conditions.
                </li>
                <li>
                  Right of Inspection of Shipment: BLUEEX has the right, but not
                  the obligation, to inspect any shipment including without
                  limitation opening the shipment if required by law and/or
                  regulations. In this regard, the Shipper/Client agrees that
                  BLUEEX may open and inspect a shipment for any reason at any
                  time.
                </li>
                <li>
                  Lien of Goods Shipped: BLUEEX shall have a lien on any goods
                  shipped for all freight Charges, Octroy duties, advances or
                  any other charges of any kind payable by the Shipper/Client
                  hereunder and may refuse to surrender possession of the goods
                  until such charges are paid by the Shipper/Client.
                </li>
                <li>
                  Liabilities Not Assumed: The Shipper/Sender acknowledges that
                  the consignment/shipment shall be transported by road and/or
                  air and shall therefore be exposed to all risks associated
                  with such mode of transportation. Subject to the aforesaid,
                  BLUEEX will endeavor to exercise its best efforts to provide
                  expeditious delivery in accordance with regular delivery
                  schedule. BLUEEX endeavor to exercise its best efforts to
                  provide expeditious delivery in accordance with regular
                  delivery schedule; however, BLUEEX will not, under any
                  circumstances be liable for delay in pick up, transport or
                  delivery of any shipment regardless of the cause of such
                  delay. Further BLUEEX shall not be liable if a shipment is
                  lost, damaged, mis-delivered or not delivered because of
                  circumstances beyond its control. These include “Act of God”
                  for example earthquake, cyclone, storm, flood or “force
                  majeure” for example war, plane crash or embargo or caused by
                  mishap with BLUEEX
                  <br />
                  The act, default or omission of the Shipper/Client, the or any
                  other party who claims an interest in the shipment (include
                  violation of any terms and condition hereof) or any person
                  other than BLUEEX or of any Government officials or of the
                  Postal service forwarded or other entity or person to whom a
                  shipment is tendered by BLUEEX or transportation to any
                  location not regularly served by BLUEEX regardless of whether
                  the Shipper/Client reported or had knowledge of such third
                  party delivery arrangements. The nature of the shipment for
                  any defect, characteristic, inherent vice thereof, even if
                  know to BLUEEX when the Shipper/Client accepted it.
                </li>
                <li>
                  Claims: Any claim must be brought by the Shipper/Client and
                  delivered in writing to the office of BLUEEX nearest the
                  location at which the shipment was accepted within 07 days of
                  the date of such acceptance, no claim may be made against
                  BLUEEX outside if this time limit. No claim for loss or damage
                  will be entertained until all transportation charges have been
                  paid. The amount of any claim may not be deducted from any
                  transportation charges owed to BLUEEX
                  <br />
                  BLUEEX does not maintain records relevant to a shipment of
                  more than 60 days. It will thereof be unable to refer to or
                  produce any such record where it is notified for the same
                  after expiry of the stand period of 60 days from the date of
                  shipment.
                </li>
                <li>
                  Insurance: It is mandatory upon shipper to arrange for
                  insurance of all shipment through BLUEEX or any insurance
                  company. BLUEEX liability for loss, pilferage, damage or delay
                  of shipments is limited to Rs.100/= (Rupees One Hundred only)
                  per domestic consignment and Rs. 1,500/= (Rupees Fifteen
                  Hundred only) per international consignment. No claim will be
                  entertained by BLUEEX exceeding these amounts. Shipments of
                  undeclared value shall be accepted for carriage and delivery
                  “On shipper’s Risk Alone”.
                </li>
                <li>
                  Damages: BLUEEX is only liable for any theft and lost subject
                  to maximum worth of 10,000 PKR, any shipment having worth more
                  than 10,000 PKR it is mandatory to arrange insurance by
                  shipper. BLUEEX is not liable for any damage during transit.
                </li>
                <li>
                  Lawfulness of Shipment/Goods: It is hereby undertaken and
                  confirmed that the shipment/goods being stored/transported
                  hereunder through BLUEEX have been acquired by the
                  Shipper/Client lawfully and no law whatsoever has been
                  breached in acquisition thereof. It is further undertaken and
                  confirmed that all the relevant and necessary documents
                  pertaining to the shipments/goods are in possession of
                  Shipper/Client who will be liable and responsible to provide
                  all and any document as and when required by BLUEEX for their
                  onward submission to any Government
                  Agency/Department/Authority etc.
                </li>
                <p>
                  It is further undertaken and confirmed that the Shipper/Client
                  shall make himself and/or any documents whatsoever available
                  at all material time and in the event that BLUEEX and/or any
                  Government Agency/Department/Authority etc. has any query in
                  relation to all and any aspect of shipments/goods.
                </p>

                <li>
                  Payment Mode: Settlement of invoice only through cross Cheque
                  in favor of Universal Network Systems (Pvt.) Limited. BLUEEX
                  will not be liable for any losses resulting if cash or any
                  other mode of payment is used by client.
                </li>

                <li>
                  Tax Exemption: BLUEEX, bearing NTN number 2691562-6, is
                  exempted from Withholding Tax under section 153 of Income Tax
                  Ordinance 2001.
                </li>

                <li>
                  Material Not Acceptable For Transportation: BLUEEX will not
                  carry Liquid, Liquor, Fire arms, Plants, Contraband Drugs,
                  Explosives, Animals, Perishables, Negotiable instruments in
                  bearer forms, Obscene or Pornographic materials, Industrial
                  Carbons, Diamonds, IATA restricted articles, any item the
                  carriage of which is prohibited by any law, regulation or
                  statute of any provincial or federal Government of Pakistan &
                  Mail/Parcels on P.O. Box Addresses. In compliance with
                  Pakistan Post Office Act-1898, BLUEEX would not accept letters
                  or post cards as their carriage is the exclusive privilege of
                  the federal government.
                </li>

                <li>GST would be applicable as per govt. Laws.</li>

                <li>
                  Rates will be increased on yearly basis with mutual
                  understanding at certain percentage.
                </li>
              </ol>
            </ol>

            <h6>7. AGREEMENT</h6>

            <ol>
              <li>
                By opening an account with blueEX you agree to the above
                mentioned terms and conditions.
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Terms;

Terms.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (
      (Object.keys(data).length === 0 && data.constructor === Object) ||
      Object(data).user === "undefined"
    ) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  return {
    data: data && data,
  };
};
