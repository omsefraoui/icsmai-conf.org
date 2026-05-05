"use client"

import { motion } from "motion/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Award, GraduationCap, BookOpen, User } from "lucide-react"
//import { Users, Award, GraduationCap, Stethoscope , BookOpen, User } from "lucide-react"

export default function Committees() {
  const committees = {
    "HONORARY COMMITTEE": [
      "Mr. Yassine ZARHLOULE, President of Mohammed Premier University, Oujda, Morocco",
      "Mr. Farid EL HEBIL, Director of National School of Applied Sciences, Oujda, Morocco",
      "Mr. El Bekkay MAAROUF, Dean of Faculty of Sciences Oujda, Morocco",
      "Mr. Khalid SERRAJ, Dean of the Faculty of Medicine and Pharmacy, Oujda, Morocco",
      "Mr. Idriss DRIOUCHI, Dean of the Faculty of Legal, Economic and Social Sciences, Oujda, Morocco",
      "Mr. EL HOUSSINE OUCHNI, Dean of the Faculty of Letters and Human Sciences, Oujda, Morocco",
      "Mr. Mohammed BARBOUCHA, Director of Ecole des Hautes Etudes d'Ingénierie,  Oujda, Morocco",
      //"Mr. Abdelhafid CHAFI, Director of EST Oujda, Morocco",
      //"Mr. Ismail RADI, Dean of FS Oujda, Morocco",
      //"Mr. Abdelali Kaaouachi, Director of ENCG Oujda, Morocco",
      //"Mr. Mohammed BARBOUCHA, Director of EHEI Oujda, Morocco",
    ],
    "GENERAL CHAIR": [
      "Pr. Kamal GHOUMID, ENSAO, Oujda, Morocco",
    ],
    "GENERAL CO-CHAIRS": [
      "Pr. Mohamed LAZAAR, ENSIAS, Rabat, Morocco",
      "Pr. Khalid HADDOUCH, ENSAF, FEZ, Morocco",
      "Pr. Réda YAHIAOUI, Marie and louis Pasteur University, France",
      "Pr. Omar ELMAZRIA, Université de lorraine , Nancy, France",
      
      //"K. GHOUMID, ENSAO, Med 1st University, Oujda, Morocco",
      //"M. SERRHINI, FSO, Med 1st University, Oujda, Morocco",
      //"M. CHOUKRI, FMPO, Med 1st University, Oujda, Morocco",
      //"F. PICAUD, Franche-Comté Univ. Besançon, France",
      //"R. YAHIAOUI, Franche-Comté Univ. Besançon, France",
    ],
    "LOCAL ORGANIZING COMMITTEE": [
      "H. Barboucha, ENSAO, Oujda, Morocco",
      "S. Daoudi, FSO, Oujda, Morocco",
      "O. Sefraoui, ENSAO, Oujda, Morocco",
      "H. Bouali, ESTO, Oujda, Morocco",
      "M.A. Madani, ENSAO, Oujda, Morocco",
      "D. Bahia, FSO, Oujda, Morocco",
      "A. Naji, ENSAO, Oujda, Morocco",
      "R. Malek, ENSAO, Oujda, Morocco",
      "A. Kerkri, ENSAO, Oujda, Morocco",
      "R. Naciri, ENSAO, Oujda, Morocco",
      "A. El Mezouari, ENSAO, Oujda, Morocco",
      "M. Saidi, Ex S/G santé publique, Oujda, Morocco",
      "H. Benhaddouh, FMPO, Oujda, Morocco",
      //"Y. Bentata, FMPO, Oujda, Morocco",
      "A. KERKOUR ELMIAD, FS, Oujda, Morocco",
      "M. Yandouzi,  ENSAO, Oujda, Morocco",
      "S. Chabel, EST Guelmim, Université Ibn Zohr, Morocco",

      /*"M. KODAD, ESTO, UMP, Oujda, Morocco",
        "D. BRIA, FSO, UMP, Oujda, Morocco",
      "O. MOUSSAOUI, ESTO, UMP, Oujda, Morocco",
      "H. BOUALI, ESTO, UMP, Oujda, Morocco",
      "R. BENKADDOUR, ESTO, UMP, Oujda, Morocco",
      "I. KISSAMI, Mohamed VI Polytechnic University, Morocco",
      "E. AMAMOU, EHEI, Oujda, Morocco",
      "O. EL MELHAOUI, EHEI, Oujda, Morocco",
      "K. SALHI, EHEI, Oujda, Morocco",
      "S. SAID, EHEI, Oujda, Morocco",
      "D. BAHIA, FSO,UMP, Oujda, Morocco",
      "K. KASSMI, FSO, UMP, Oujda, Morocco",
      "A. AZOUZOUTE, FSO, UMP, OUJDA, Morocco",
      "M. BENHADDOU, ENA, UMP, Oujda, Morocco",
      "A. ESSADEK, FSO, UMP, Oujda, Morocco",
      "S. MAZOUZ, FSO, UMP, Oujda, Morocco",
      "A. MOUSSA, FSO, UMP, Oujda, Morocco",
      "S. SABRI, UMP, Oujda, Morocco",
      "E. H. SEBBAR, FMPO, UMP, Oujda, Morocco",
      "D. EL MOUJTAHIDE, FMPO, UMP, Oujda, Morocco",
      "A. SADDARI, FMPO, UMP, Oujda, Morocco",*/
    ],
    /*"MEDICAL PROFESSORS ORGANIZING COMMITTEE": [
      "  H. Benhaddouh, FMPO, Oujda, Morocco",
      "  Y. Bentata, FMPO, Oujda, Morocco",
           
      "I. LAJOIE, Franche-Comté Besançon University, France",
      "G. HERLEM, Franche-Comté Besançon University, France",
      "A. MOUSTEFAOUI, Montbebilart University, France",
      "E. YUSIFLI ATISOL Paris, France",
      "K. ÇETINKAYA, Karabuk University, Turkey",
      "S. YEVSEIEV, Kharkiv Polytechnic Institute, Ukraine",
      "L. BEKIROVA, ASOIU Baku, Azebaidjan",
      "B. ALAOUI SOSSE, Franche-Comté University. Besançon, France",
      "M. FAYAD, Franche-Comté Univ. Besançon, France",
      "F. BENKHALDOUN, Sorbonne Paris Nord University, France",
    ],*/
    "STUDENT COMMITTEE": [
      "R. Ghafir, UMP, Oujda, Morocco",
      "R. Baba, UMP, Oujda, Morocco",
      /*"Y. EL KANEB, UMP, Oujda, Morocco",
      "M. RAHMOUNI, UMP, Oujda, Morocco",
      "I. CHAHID, UMP, Oujda, Morocco",
      "I. MARKAOUI, UMP, Oujda, Morocco",
      "S. ELJAGHAOUI, UMP, Oujda, Morocco",
      "B. ZOUGHAGH, UMP, Oujda, Morocco",
      "M. YANDOUZI, UMP, Oujda, Morocco",
      "I. ZIANE, UMP, Oujda, Morocco",
      "F. Z. BARHDADI, UMP, Oujda, Morocco",
      "I. JAMAL, UMP, Oujda, Morocco",
      "A. KAOUACHI, UMP, Oujda, Morocco",
      "I. ETOUIL, UMP, Oujda, Morocco",
      "Y. Guetbach, UMP, Oujda, Morocco",*/
    ],
    "TECHNICAL PROGRAM COMMITTEE": [
      "Mrunal Gangrade  VP JPMorgan Chase & Co. Floride, USA",
      "I. LAJOIE, Marie and louis Pasteur University, France",
      "Navom Saxena,  Meta, New York, USA",
      "F. AUBER, Marie and louis Pasteur University, France",
      "Sunil Kumar Gurram,   Californie, USA",
      "Ranadheer Charabuddi  Nutrien, USA",
      "Bhavnish Walia,  Amazon,  New York City  USA",
      "Banani Mohapatra,  Walmart, San Francisco, USA",
      "Chaitanya Reddy, Dallas , USA",
      "Naveen Kolli,  Bank of America Texas,  USA",
      //"O. BARAKAT, Franche-Comté Univ. Besançon, France",
      "A. Moustefaoui, Montbebilart. Marie and louis Pasteur University, France",
      "B. ALAOUI-SOSSÉ, Marie and louis Pasteur University, France",
      "K. CETINKAYA, Karabuk University, Turkey",
      "Divyadharshini Karthikeyan, Amazon, Canada",
      "S. YEVSEIEV, Kharkiv Polytechnic Institute, Ukraine",
      "L. BEKIROVA, ASOIU Baku, Azebaidjan",
      "A. G. Armada, Universidad Carlos III de Madrid, Spain",
      "G. VARSHNEY, JSS Academy of Technical Education Noida, UP, India",
      "A. KHARe, Sharda University, Greater Noida, India",
      "S. VARSHNEY, Sharda University, Greater Noida, India",
      "P. K. RAJPUT, UPES, Dehradun, India",
       "S. Daoudi, FSO, Oujda, Morocco",
      "O. Sefraoui, ENSAO, Oujda, Morocco",
      "H. Bouali, ESTO, Oujda, Morocco",
      "M.A. Madani, ENSAO, Oujda, Morocco",
      "D. Bahia, FSO, Oujda, Morocco",
      "A. Naji, ENSAO, Oujda, Morocco",
      "R. Malek, ENSAO, Oujda, Morocco",
      "A. Kerkri, ENSAO, Oujda, Morocco",
      "A. El Mezouari, ENSAO, Oujda, Morocco",
      "R. Naciri, ENSAO, Oujda, Morocco",
      "H. Benhaddouh, FMPO, Oujda, Morocco",
      "Y. Bentata, FMPO, Oujda, Morocco",
      //"M. Saidi, Hôpital Al Farabi, Oujda, Morocco",
      "M. Yandouzi,  ENSAO, Oujda, Morocco",
      "M. Grari, ESTO, Oujda, Morocco",
      "M.A. Moutaouekkil, ENSAO, Oujda, Morocco",
      "E. YUSIFLI ATISOL Paris, France",
      "M. ABBOUD-ABID ENP, Oran, Algeria",
      //"H. BOUROUINA, QPPC, Normal School Boussada, Algeria",
      "E-M. AR-REYOUCHI, SNRT, Morocco",
      "N. DERGUINI, ENS de Kouba, Algeria",
      //"F. ABDI, FSDM, Fez, Morocco",
      "M. KADIC, Marie and louis Pasteur University, FEMTO-ST, France",
     // "K. KASSMI, FSO, UMP, Oujda, Morocco",
      "F. KARDOUS, ENSTA, Tunis, Tunisia",
      "A. SUBASI, Univ. Jeddah, Saudi Arabia",
      "S. MIAN QAISAR, LINEACT, CESI Eng School, France",
      "S. ZHGOON, Univ. Russia, Moscow, Russia",
     // "K. SALHI, EHEI, Oujda, Morocco",
      //"S. SAID, EHEI, Oujda, Morocco",
      "C. LEPERS, INT Paris, France",
      //"A. AHAITOUF, Univ. Sidi Med ben Abdellah, Fez, Morocco",
      "A. BOUKERCH, Ottawa Univ., Canada",
      "F. BELKACEM, L.I.S.I.C., FEI, USTHB, Algeria",
      "L. FERHAT-HAMIDA, L.I.S.I.C, FEI, USTHB, Algeria",
      "A. TELMAN, Baku Institut, Academician, Azerbaijan",
      "F. SADIKOGHLU, Univ. Nicosia, Cyprus",
      "M. FARHAT, UWI, Mona, FST, Jamaica",
      "F. BENKHALDOUN, Sorbonne Paris Nord University, France",
      //"M. AZIZI, ESTO, UMP, Oujda, Morocco",
      "A. TALBI, Centrale Lille, France",
      //"M. KODAD, ESTO, UMP, Oujda, Morocco",
      "A. KERKOUR ELMIAD, FS, Oujda, Morocco",
      "B. EL MAHDAWI, Engineering Technical College Bagdad, Irak",
      "C. DROCOURT, UPJV, Amiens, France",
      "D. DURAND, UPJV, Amiens, France",
      "N. KERZAZI, ENSIAS, Rabat, Morocco",
      "M. A. KASMI, FS, Oujda, Morocco",
     // "N. OUERDI, FS, Oujda, Morocco",
      "I. HAMZAOUI, Univ. Valencience, France",
      "M. UMAR KHAN, COMSATS University, IslamAbad, Pakistan",
      "A. MOKHTARI, Univ. Gronoble, France",
      "M. Zeryouh, ENSA, Oujda, Morocco",
      "K. Alaoui, ENSA, Oujda, Morocco",
      "J. Oubaha, ENSA, Oujda, Morocco",
      //"H. BOUALI, ESTO, UMP, Oujda, Morocco",
      //"R. BENKADDOUR, ESTO, UMP, Oujda, Morocco",
      "M. JEYAR, ESTO, UMP, Oujda, Morocco",
      "M. ABBOUD-ABID ENP, Oran, Algérie",
      "I. KISSAMI, Mohamed VI Polytechnic University, Morocco",
      "M. FAYAD, Marie and louis Pasteur University, France",
      "N. KHARMOUM, CNRST, Rabat, Morocco",
      //"Y. KHLIFI, ENSAO, Med. UMP, Oujda, Morocco",
      //"H. BARBOUCHA, ENSAO, Med. UMP, Oujda, Morocco",
      //"M. BENHADDOU, ENA, Oujda, Morocco",
      /*"A. BENBRIKE, FS, Oujda, Morocco",*/
      "R. CHIKH, ENSA, Oujda, Morocco",
      "A. ABBADI, ENSA, Oujda, Morocco",
      //"R. KORIKACHE, ESTO, UMP, Oujda, Morocco",
      //"J. ZIDOUNI, ENSA, Oujda, Morocco",
      //"H. OUEDFELL, ENSA, Oujda, Morocco",
      //"M. EL BOUKHARI, ESTO, UMP, Oujda, Morocco",
      //"M. GRARI, ESTO, UMP, Oujda, Morocco",
      //"S. CHABEL, EST, Guelmim, Morocco",
      //"D. BAHIA, FS, Oujda, Morocco",
      "O. MOUSSAOUI, ESTO, UMP, Oujda, Morocco",
      "K. HABOUBI, ENSA, Al Hoceima, Morocco",
      "F. DIMANE, ENSA, Al Hoceima, Morocco",
      "A. ESSADEK, FS, Oujda, Morocco",
      /*"T. Hajji, ENSEM, Meknes, Morocco",
      "N. Kharmoum, CNRST, Rabat, Morocco",
      "M. Boutaounte, ENCG, Dakhla, Morocco",
      "M. S. ELYOUBI, FS, Kenitra, Morocco",*/
     /* "M. Blej, CRMEF, Oujda, Morocco",
      "M. Tahrichi, ESTO, UMP, Oujda, Morocco",
      "A. Serghini, ESTO, UMP, Oujda, Morocco",
      "K. REKLAOUI, ENSA, Tetouane, Morocco",
      "A. NASSER, ESTO, UMP, Oujda, Morocco",
      "I. Bouabdallah, CRMEF Oujda, Morocco",
      "F. Falyouni, FSO Oujda, Morocco",
      "M. Merzougui, UMP Oujda, Morocco",
      "S. MAZOUZ, FSO, UMP, Oujda, Morocco",*/
      "B. Al-Mahdawi, TCE, MT University, Baghdad, IRAQ",
      "A. Al-Azzawi, TCE, MT University, Baghdad, IRAQ",
      "A. Abdulazeez, CS, Al-Mustansiriyah University, Baghdad, IRAQ",
      /*"A. Moussa, FSO, UMP, Oujda, Morocco",
      "A. Ghadbane, FSO, UMP, Oujda, Morocco",*/
      "A. BENLGHAZI, ENSAO, Oujda, Morocco",
      //"Z. Bougroune, ENSAO, Oujda, Morocco",
      //"K. AZGHIOU, ENSAO, Oujda, Morocco",
      "E. H. SEBBAR, FMPO, UMP, Oujda, Morocco",
      "D. EL MOUJTAHIDE, FMPO, UMP, Oujda, Morocco",
      "A. SADDARI, FMPO, UMP, Oujda, Morocco",
      "M Benheddi, FMPO, UMP, Oujda, Morocco",
    ],
  }

  interface CommitteeIcons {
    [key: string]: React.ReactNode;
  }
  const committeeIcons:CommitteeIcons = {
    "HONORARY COMMITTEE": <Award className="h-5 w-5" />,
    "GENERAL CHAIRS": <User className="h-5 w-5" />,
    "GENERAL CO-CHAIRS": <User className="h-5 w-5" />,
    "LOCAL ORGANIZING COMMITTEE": <Users className="h-5 w-5" />,
    //"MEDICAL PROFESSORS ORGANIZING COMMITTEE": <Stethoscope  className="h-5 w-5" />,
    "STUDENT COMMITTEE": <GraduationCap className="h-5 w-5" />,
    "TECHNICAL PROGRAM COMMITTEE": <BookOpen className="h-5 w-5" />,
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }


  return (
    <section
      id="committees"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80"
    >
      <div className="container px-4 md:px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Conference Committees
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Committees</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The dedicated team of professionals organizing and guiding ICSMAI 2025.
            </p>
          </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {Object.entries(committees).map(([committeeName, members], index) => (
            <AccordionItem
              key={committeeName}
              value={`item-${index}`}
              className="rounded-lg border bg-card shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 group">
                <div className="flex items-center gap-3 text-left">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {committeeIcons[committeeName]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{committeeName}</h3>
                    <p className="text-sm text-muted-foreground">{members.length} Members</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {members.map((member, memberIndex) => {
              
                    return (
                      <motion.div key={memberIndex} variants={item}>
                        <div className="flex items-start p-3 rounded-md bg-muted/50 hover:bg-muted transition-colors">
                          <div className="text-sm font-medium">
                            {member}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
