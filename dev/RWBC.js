const { json } = require('body-parser');
const e = require('express');
const sha256 = require('sha256')
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
let blockChain = JSON.parse(localStorage.getItem('blockChain'))
const rsa = require("node-rsa")
const fs = require("fs")
let encryptedblockChain = JSON.parse(localStorage.getItem('encryptedblockChain'))
const crypto = require("crypto")
const currentNodeUrl = process.argv[3]
blockChain.currentNodeUrl = currentNodeUrl;
blockChain.networkNodes = ["http://localhost:3002",
    "http://localhost:3003",
    "http://localhost:3004",
    "http://localhost:3005",
    "http://localhost:3006"
]

function Block() {
    this.columnChain = []
    this.medicalHistory = []

}


// first level of medical history >> personal history

Block.prototype.personalHistory = function (chiefComplain, releaseDate, citizenId, name, sex, age, occupation, marriedState, residence, habits) {
    this.releaseDate = new Date(releaseDate)
    this.citizenId = citizenId
    this.name = name
    this.age = age
    this.sex = sex
    this.occupation = occupation
    this.marriedState = marriedState
    this.residence = residence
    this.habits = habits
    //mostly 50 word
    this.chiefComplain = chiefComplain

    this.documentId = sha256(JSON.stringify(this.releaseDate) + JSON.stringify(this.citizenId) + JSON.stringify(this.name) + JSON.stringify(this.age) + JSON.stringify(this.sex) + JSON.stringify(this.occupation) + JSON.stringify(this.marriedState) + JSON.stringify(this.residence) + JSON.stringify(this.habits) + JSON.stringify(this.pastHistory))

}

//second level of medical History >> present illness History
Block.prototype.presentHistory = function (chiefComplain, location, system, quality, severity, duration, timing, context, modifyingFactors) {
    this.chiefComplain = chiefComplain
    //What is the location of the pain?
    this.location = location
    this.system = system
    this.systemSymptoms = []
    //Include a description of the quality of the symptom (i.e.  sharp pain)
    this.quality = quality
    //Degree of pain for example can be described on a scale of 1 - 10
    this.severity = severity
    //How long have you had the pain
    this.duration = duration
    //Describe when you have pain for example pain with exertion or pain in evening
    this.timing = timing
    //What is the patient doing when the pain begins
    this.context = context
    //What makes the pain better or worse for example aspirin helps
    this.modifyingFactors = modifyingFactors
    this.documentId = sha256(JSON.stringify(this.chiefComplain) + JSON.stringify(this.system) + JSON.stringify(this.systemSymptoms) + JSON.stringify(this.location) + JSON.stringify(this.quality) + JSON.stringify(this.severity) + JSON.stringify(this.duration) + JSON.stringify(this.timing) + JSON.stringify(this.context) + JSON.stringify(this.modifyingFactors))

}

/*
third level of medical History >> The Review of Systems (ROS) is an inventory of the body systems that is obtained
 through a series of questions in order to identify signs and/or symptoms which the patient may be experiencing. 
 The Centers for Medicare and Medicaid Services (CMS) recognizes 14 systems
*/
Block.prototype.reviewOfSystems = function (Wloss, Dsweats, Fati, Mala, Letha, Spattern, Appe, Feve, Itc, Ras, Rtrauma, Lum, Bum, Mass, Vchanges, Hache, Epain, Dvision, Bspots, AGPdown, Rhemorrhage, Afugax, Ear, Nos, Mout, Throa, Rnose, FNbleeds, Spain, Sears, earP, ringE, gingivalB, toothA, soreT, Pswallow, chestP, Sbreathe, excersiceIn, pn, orthoP, Oed, palp, faint, Lcons, clau, Cou, Spu, Whee, Haemop, SBre, exIN, abdomP, uniNweighL, Dswal, indig, bloat, cram, Lappe, foodAv, Naus, vomit, diarr, consti, INabG, vomB, brredblood, foul, dryB, dys, Huria, Nuria, Puria, Hesit, termDrib, decreFor, Dcha, pai, Mfre, Mreg, exusePad, stainCL, CLot, durat, Pai, firstD, grav, par, abor, mena, menop, contraC, lastS, Pn, Misalig, STmorn, STday, STimprovAct, STworse, jointS, DRmotion, crep, Fdef, arthri, prur, Rsh, Stri, lesi, woun, incis, acanth, nodul, tumo, ecze, exdry, discolo, breastP, sore, lumP, Dchar, chasigh, chansme, chahear, chantaste, seiz, fain, fit, funn, heada, needlS, numbn, limbwe, poorba, speepr, spindis, cogni, pshyco, Depr, sleepa, anxi, DConcen, bodyI, WSperfo, paran, anhedo, Lenerg, epiMani, changpersona, expanspers, sexbin, financ, orefcol, moods, sweat, diarrh, oligo, weLdes, trem, palpit, visual, prefhot, slo, tir, depres, thin, croakv, heavper, constiP, drski, polydi, polyur, polyph, dizz, swea, achH, hung, tongud, dtreatp, chronlblood, ortho, darksk, menar, cycdurfr, vagblee, birthcont, sexarous, diferec, sexaro, depres, lackstam, anem, purp, petec, hemod, afterinj, platdrug, hphil, granf, bdonat, dbrea, anaph, swel, pagro, axilnod, swogla, allermat, allerfood, alleranim, beets, unsneez, runno, itceye, medallerg) {
    this.ConstitutionalSymptoms = {
        weightloss: Wloss,
        daysweats: Dsweats,
        fatigue: Fati,
        malaise: Mala,
        lethargy: Letha,
        sleepingpattern: Spattern,
        appetite: Appe,
        fever: Feve,
        itch: Itc,
        rash: Ras,
        recenttrauma: Rtrauma,
        lumps: Lum,
        bumps: Bum,
        masses: Mass

    }
    this.eyesSymptoms = {
        visualchanges: Vchanges,
        headache: Hache,
        eyepain: Epain,
        doublevision: Dvision,
        blindspots: Bspots,
        floaters: Floa,
        acurtainGotPulledDown: AGPdown,
        retinalHemorrhage: Rhemorrhage,
        amaurosisFugax: Afugax

    }
    this.ENMTsymptoms = {
        Ears: Ear,
        nose: Nos,
        mouth: Mout,
        throat: Throa,
        RunnyNose: Rnose,
        //epistaxis
        frequentNoseBleeds: FNbleeds,
        sinusPain: Spain,
        stuffyEars: Sears,
        earPain: earP,
        //tinnitus
        ringingInEars: ringE,
        gingivalBleeding: gingivalB,
        toothache: toothA,
        soreThroat: soreT,
        //odynophagia
        painWithSwallowing: Pswallow
    }
    this.CardiovascularSymptoms = {
        chestPain: chestP,
        shortnessOfBreath: Sbreathe,
        exerciseIntolerance: excersiceIn,
        PND: pn,
        orthopnoea: orthoP,
        oedema: Oed,
        palpitations: palp,
        faintness: faint,
        lossOfConsciousness: Lcons,
        claudication: clau
    }
    this.RespiratorySymptoms = {
        cough: Cou,
        sputum: Spu,
        wheeze: Whee,
        haemoptysis: Haemop,
        shortnessOfBreath: SBre,
        exerciseIntolerance: exIN
    }
    this.GastrointestinalSymptoms = {
        abdominalPain: abdomP,
        unintentionalWeightLoss: uniNweighL,
        difficultySwallowing: Dswal,
        indigestion: indig,
        bloating: bloat,
        cramping: cram,
        lossOfAppetite: Lappe,
        foodAvoidance: foodAv,
        nausea: Naus,
        vomiting: vomit,
        diarrhea: diarr,
        constipation: consti,
        //obstipation
        inabilityToPassGas: INabG,
        //haematemesis
        vomitingBlood: vomB,
        //BRBPR, hematochezia
        brightRedBloodPerRectum: brredblood,
        //melaena
        foulSmellingDarkBlackTarryStools: foul,
        //tenesmus
        dryHeavesOfTheBowels: dryB

    }
    this.GenitourinarySymptoms = {
        dysuria: dys,
        haematuria: Huria,
        nocturia: Nuria,
        polyuria: Puria,
        hesitancy: Hesit,
        terminalDribbling: termDrib,
        decreasedForceOfStream: decreFor,
        //Genital: Vaginal 
        discharge: Dcha,
        pain: pai,
        Menses: {
            frequency: Mfre,
            regularity: Mreg
        },

        excessiveUseOfPads: exusePad,
        stainingOfClothes: stainCL,
        //always indicate heavy bleeding
        clots: CLot,
        duration: durat,
        pain: Pai,
        firstDayOfLastMenstrualPeriod: firstD,
        gravida: grav,
        para: par,
        abortus: abor,
        menarche: mena,
        menopause: menop,
        contraception: contraC,
        dateOfLastSmearTest: lastS
    }
    this.MusculoskeletalSymptoms = {
        pain: Pn,
        misalignment: Misalig,
        stiffness: {
            morning: STmorn,
            dayLong: STday,
            improvesWithActivity: STimprovAct,
            WorsensWithActivity: STworse,
        },
        jointSwelling: jointS,
        decreasedRangeOfMotion: DRmotion,
        crepitus: crep,
        functionalDeficit: Fdef,
        arthritis: arthri

    }
    this.integumentarySymptoms = {
        pruritus: prur,
        rashes: Rsh,
        stria: Stri,
        lesions: lesi,
        wounds: woun,
        incisions: incis,
        acanthosisNigricans: acanth,
        nodules: nodul,
        tumors: tumo,
        eczema: ecze,
        excessiveDryness: exdry,
        discoloration: discolo,
        BreastPain: breastP,
        soreness: sore,
        lumps: lumP,
        discharge: Dchar

    }
    this.NeurologicalSymptoms = {
        changesInSight: chasigh,
        changesInSmell: chansme,
        changesInHearing: chahear,
        changesIntaste: chantaste,
        seizures: seiz,
        faints: fain,
        fits: fit,
        funnyTurns: funn,
        headache: heada,
        //paraesthesiae
        needlesSensation: needlS,
        numbness: numbn,
        limbWeakness: limbwe,
        poorBalance: poorba,
        speechProblems: speepr,
        sphincterDisturbance: spindis,
        cognitive: cogni,
        psychiatricSymptoms: pshyco
    }
    this.PsychiatricSymptoms = {
        depression: Depr,
        sleepPatterns: sleepa,
        anxiety: anxi,
        difficultyConcentrating: DConcen,
        bodyImage: bodyI,
        workAndSchoolPerformance: WSperfo,
        paranoia: paran,
        anhedonia: anhedo,
        lackOfEnergy: Lenerg,
        episodesOfMania: epiMani,
        episodicChangeInPersonality: changpersona,
        expansivePersonality: expanspers,
        sexualBinges: sexbin,
        financialBinges: financ

    }
    this.EndocrineSymptoms = {
        //Hyperthyroid
        preferColdWeather: orefcol,
        moodSwings: moods,
        sweaty: sweat,
        diarrhoea: diarrh,
        oligomenorrhoea: oligo,
        weightLossDespiteIncreasedAppetite: weLdes,
        tremor: trem,
        palpitations: palpit,
        visualDisturbances: visual,
        //Hypothyroid
        preferHotWeather: prefhot,
        slow: slo,
        tired: tir,
        depressed: depres,
        thinHair: thin,
        croakyVoice: croakv,
        heavyPeriods: heavper,
        constipation: constiP,
        drySkin: drski,
        //Diabetes: 
        polydipsia: polydi,
        polyuria: polyur,
        //constant hunger without weight gain is more typical for a type I diabetic than type II
        polyphagia: polyph,
        //symptoms of hypoglycemia such as 
        dizziness: dizz,
        sweating: swea,
        headache: achH,
        hunger: hung,
        tongueDysarticulation: tongud,
        //Adrenal: 
        difficultToTreatHypertension: dtreatp,
        chronicLowBloodPressure: chronlblood,
        orthostaticSymptoms: ortho,
        darkeningOfSkinInNonSunExposedPlaces: darksk,
        //Reproductive (female): 
        menarche: menar,
        cycleDurationAndFrequency: cycdurfr,
        vaginalBleedingIrregularities: vagblee,
        useOfBirthControlPills: birthcont,
        changesInSexualArousalOrLibido: sexarous,
        //Reproductive (male): 
        difficultyWithErection: diferec,
        sexualArousal: sexaro,
        depression: depres,
        lackOfStamina: lackstam
    }
    this.lymphaticSymptoms = {
        anemia: anem,
        purpura: purp,
        petechia: petec,
        hemolyticDiseases: hemod,
        prolongedOrExcessiveBleedingAfterinjury: afterinj,
        //(including aspirin)
        useOfAnticoagulantAndAntiplateletDrugs: platdrug,
        hemophilia: hphil,
        bloodTGransfusion: granf,
        refusedForBloodDonation: bdonat
    }
    this.immunologicalSymptoms = {
        DifficultyBreathing: dbrea,
        //(as a result of exposure to anything (and state what; e.g. "bee sting").
        anaphylaxis: anaph,
        Swelling: swel,
        painAtGroin: pagro,
        axillaOrNeckSwollenLymphNodes: axilnod,
        swollenGlands: swogla,
        //(rash/itch)
        allergicResponsetoMterials: allermat,
        allergicResponsetoFoods: allerfood,
        allergicResponsetoAnimals: alleranim,
        reactionToBeeSting: beets,
        //(in response to what)
        unusualSneezing: unsneez,
        runnyNose: runno,
        itchyTearyEyes: itceye,
        medicationOrEnvironmentalAllergyTestResult: medallerg
    }
    this.documentId = sha256(JSON.stringify(this.ConstitutionalSymptoms) + JSON.stringify(this.eyesSymptoms) + JSON.stringify(this.ENMTsymptoms) + JSON.stringify(this.CardiovascularSymptoms) + JSON.stringify(this.RespiratorySymptoms) + JSON.stringify(this.GastrointestinalSymptoms) + JSON.stringify(this.GenitourinarySymptoms) + JSON.stringify(this.MusculoskeletalSymptoms) + JSON.stringify(this.integumentarySymptoms) + JSON.stringify(this.NeurologicalSymptoms) + JSON.stringify(this.PsychiatricSymptoms) + JSON.stringify(this.EndocrineSymptoms) + JSON.stringify(this.lymphaticSymptoms) + JSON.stringify(this.immunologicalSymptoms))
}


/*weight loss, day sweats, fatigue/malaise/lethargy, sleeping pattern, appetite, fever, itch/rash, recent trauma
, lumps/bumps/masses*/
Block.prototype.ConstitutionalSymptoms = function () {
    //boolean value
    this.weightloss = []
    this.daysweats = []
    this.fatigue = []
    this.malaise = []
    this.lethargy = []
    this.sleepingpattern = []
    this.appetite = []
    this.fever = []
    this.itch = []
    this.rash = []
    this.recenttrauma = []
    this.lumps = []
    this.bumps = []
    this.masses = []

}
/*visual changes, headache, eye pain, double vision
, scotomas (blind spots), floaters or "feeling like a curtain got pulled down" (retinal hemorrhage vs amaurosis fugax)
*/
Block.prototype.eyesSymptoms = function () {
    this.visualchanges = []
    this.headache = []
    this.eyepain = []
    this.doublevision = []
    this.blindspots = []
    this.floaters = []
    this.acurtainGotPulledDown = []
    this.retinalHemorrhage = []
    this.amaurosisFugax = []

}
/*Ears, nose, mouth, throat
Runny nose, frequent nose bleeds (epistaxis), sinus pain, 
stuffy ears, ear pain, ringing in ears (tinnitus), gingival bleeding, toothache, sore throat
, pain with swallowing (odynophagia)
*/
Block.prototype.ENMTsymptoms = function () {
    this.Ears = []
    this.nose = []
    this.mouth = []
    this.throat = []
    this.RunnyNose = []
    //epistaxis
    this.frequentNoseBleeds = []
    this.sinusPain = []
    this.stuffyEars = []
    this.earPain = []
    //tinnitus
    this.ringingInEars = []
    this.gingivalBleeding = []
    this.toothache = []
    this.soreThroat = []
    //odynophagia
    this.painWithSwallowing = []

}
/*chest pain, shortness of breath
, exercise intolerance, PND, orthopnoea, oedema, palpitations, faintness, loss of consciousness, claudication
 */
Block.prototype.CardiovascularSymptoms = function () {
    this.chestPain = []
    this.shortnessOfBreath = []
    this.exerciseIntolerance = []
    this.PND = []
    this.orthopnoea = []
    this.oedema = []
    this.palpitations = []
    this.faintness = []
    this.lossOfConsciousness = []
    this.claudication = []

}
//cough, sputum, wheeze, haemoptysis, shortness of breath, exercise intolerance
Block.prototype.RespiratorySymptoms = function () {
    this.cough = []
    this.sputum = []
    this.wheeze = []
    this.haemoptysis = []
    this.shortnessOfBreath = []
    this.exerciseIntolerance = []
}
/*abdominal pain, unintentional weight loss, difficulty swallowing (solids vs liquids)
, indigestion, bloating, cramping, loss of appetite, food avoidance, nausea/vomiting
, diarrhea/constipation, inability to pass gas (obstipation), vomiting blood (haematemesis)
, bright red blood per rectum (BRBPR, hematochezia),
 foul smelling dark black tarry stools (melaena), dry heaves of the bowels (tenesmus)
 */
Block.prototype.GastrointestinalSymptoms = function () {
    this.abdominalPain = []
    this.unintentionalWeightLoss = []
    this.difficultySwallowing = []
    this.indigestion = []
    this.bloating = []
    this.cramping = []
    this.lossOfAppetite = []
    this.foodAvoidance = []
    this.nausea = []
    this.vomiting = []
    this.diarrhea = []
    this.constipation = []
    //obstipation
    this.inabilityToPassGas = []
    //haematemesis
    this.vomitingBlood = []
    //BRBPR, hematochezia
    this.brightRedBloodPerRectum = []
    //melaena
    this.foulSmellingDarkBlackTarryStools = []
    //tenesmus
    this.dryHeavesOfTheBowels = []

}
/*
Urinary: Irritative vs Obstructive symptoms: Micturition – incontinence, dysuria, haematuria, nocturia
, polyuria, hesitancy, terminal dribbling, decreased force of stream
Genital: Vaginal – discharge, pain, Menses – frequency, regularity
 , heavy or light (ask about excessive use of pads/tampons, staining of clothes, clots always indicate heavy bleeding)
 , duration, pain, first day of last menstrual period (LMP), gravida/para/abortus, menarche, menopause
 , contraception (if relevant), date of last smear test and result
 */
Block.prototype.GenitourinarySymptoms = function () {
    //Urinary:
    this.dysuria = []
    this.haematuria = []
    this.nocturia = []
    this.polyuria = []
    this.hesitancy = []
    this.terminalDribbling = []
    this.decreasedForceOfStream = []
    //Genital: Vaginal 
    this.discharge = []
    this.pain = []
    this.Menses = {
        frequency: []
        , regularity: []
    }

    this.excessiveUseOfPads = []
    this.stainingOfClothes = []
    //always indicate heavy bleeding
    this.clots = []
    this.duration = []
    this.pain = []
    this.firstDayOfLastMenstrualPeriod = [](LMP)
    this.gravida = []
    this.para = []
    this.abortus = []
    this.menarche = []
    this.menopause = []
    this.contraception = []
    this.dateOfLastSmearTest = []

}

/*pain, misalignment, stiffness (morning vs day long; improves/worsens with activity)
, joint swelling, decreased range of motion, crepitus, functional deficit, arthritis
 */
Block.prototype.MusculoskeletalSymptoms = function () {
    this.pain = []
    this.misalignment = []
    this.stiffness = {
        morning: [],
        dayLong: []
        , improvesWithActivity: []
        , WorsensWithActivity: []
    }
    this.jointSwelling = []
    this.decreasedRangeOfMotion = []
    this.crepitus = []
    this.functionalDeficit = []
    this.arthritis = []

}
/*pruritus, rashes, stria, lesions, wounds, incisions, acanthosis nigricans, nodules, tumors, eczema
, excessive dryness and/or discoloration. Breast pain, soreness, lumps, or discharge.
 */
Block.prototype.integumentarySymptoms = function () {
    this.pruritus = []
    this.rashes = []
    this.stria = []
    this.lesions = []
    this.wounds = []
    this.incisions = []
    this.acanthosisNigricans = []
    this.nodules = []
    this.tumors = []
    this.eczema = []
    this.excessiveDryness = []
    this.discoloration = []
    this.BreastPain = []
    this.soreness = []
    this.lumps = []
    this.discharge = []

}
/*Special senses – any changes in sight, smell, hearing and taste, seizures, faints, fits, funny turns, headache
, pins and needles (paraesthesiae) or numbness, limb weakness, poor balance, speech problems, sphincter disturbance
, cognitive and psychiatric symptoms */
Block.prototype.NeurologicalSymptoms = function () {
    this.changesInSight = []
    this.changesInSmell = []
    this.changesInHearing = []
    this.changesIntaste = []
    this.seizures = []
    this.faints = []
    this.fits = []
    this.funnyTurns = []
    this.headache = []
    //paraesthesiae
    this.needlesSensation = []
    this.numbness = []
    this.limbWeakness = []
    this.poorBalance = []
    this.speechProblems = []
    this.sphincterDisturbance = []
    this.cognitive = []
    this.psychiatricSymptoms = []

}
/*depression, sleep patterns, anxiety, difficulty concentrating, body image, work and school performance
, paranoia, anhedonia, lack of energy, episodes of mania, episodic change in personality, expansive personality
, sexual or financial binges
 */
Block.prototype.PsychiatricSymptoms = function () {
    this.depression = []
    this.sleepPatterns = []
    this.anxiety = []
    this.difficultyConcentrating = []
    this.bodyImage = []
    this.workAndSchoolPerformance = []
    this.paranoia = []
    this.anhedonia = []
    this.lackOfEnergy = []
    this.episodesOfMania = []
    this.episodicChangeInPersonality = []
    this.expansivePersonality = []
    this.sexualBinges = []
    this.financialBinges = []

}
/*Hyperthyroid: prefer cold weather, mood swings, sweaty, diarrhoea, oligomenorrhoea, weight loss despite increased appetite, tremor, palpitations, visual disturbances;
  Hypothyroid – prefer hot weather, slow, tired, depressed, thin hair, croaky voice, heavy periods, constipation, dry skin
  Diabetes: polydipsia, polyuria, polyphagia (constant hunger without weight gain is more typical for a type I diabetic than type II), symptoms of hypoglycemia such as dizziness, sweating, headache, hunger, tongue dysarticulation
  Adrenal: difficult to treat hypertension, chronic low blood pressure, orthostatic symptoms, darkening of skin in non-sun exposed places
  Reproductive (female): menarche, cycle duration and frequency, vaginal bleeding irregularities, use of birth control pills, changes in sexual arousal or libido
  Reproductive (male): difficulty with erection or sexual arousal, depression, lack of stamina/energy */
Block.prototype.EndocrineSymptoms = function () {
    //Hyperthyroid
    this.preferColdWeather = []
    this.moodSwings = []
    this.sweaty = []
    this.diarrhoea = []
    this.oligomenorrhoea = []
    this.weightLossDespiteIncreasedAppetite = []
    this.tremor = []
    this.palpitations = []
    this.visualDisturbances = []
    //Hypothyroid
    this.preferHotWeather = []
    this.slow = []
    this.tired = []
    this.depressed = []
    this.thinHair = []
    this.croakyVoice = []
    this.heavyPeriods = []
    this.constipation = []
    this.drySkin = []
    //Diabetes: 
    this.polydipsia = []
    this.polyuria = []
    //constant hunger without weight gain is more typical for a type I diabetic than type II
    this.polyphagia = []
    //symptoms of hypoglycemia such as 
    this.dizziness = []
    this.sweating = []
    this.headache = []
    this.hunger = []
    this.tongueDysarticulation = []
    //Adrenal: 
    this.difficultToTreatHypertension = []
    this.chronicLowBloodPressure = []
    this.orthostaticSymptoms = []
    this.darkeningOfSkinInNonSunExposedPlaces = []
    //Reproductive (female): 
    this.menarche = []
    this.cycleDurationAndFrequency = []
    this.vaginalBleedingIrregularities = []
    this.useOfBirthControlPills = []
    this.changesInSexualArousalOrLibido = []
    //Reproductive (male): 
    this.difficultyWithErection
    this.sexualArousal = []
    this.depression = []
    this.lackOfStamina = []
}
/*anemia, purpura, petechia, results from routine hemolytic diseases 
, prolonged or excessive bleeding after dental extraction / injury
, use of anticoagulant and antiplatelet drugs (including aspirin)
, family history of hemophilia, history of a blood transfusion, refused for blood donation */
Block.prototype.lymphaticSymptoms = function () {
    this.anemia = []
    this.purpura = []
    this.petechia = []
    this.hemolyticDiseases = []
    this.prolongedOrExcessiveBleedingAfterinjury = []
    //(including aspirin)
    this.useOfAnticoagulantAndAntiplateletDrugs = []
    this.hemophilia = []
    this.bloodTGransfusion = []
    this.refusedForBloodDonation = []

}
/*
"Difficulty breathing" or "choking" (anaphylaxis) as a result of exposure to anything (and state what; e.g. "bee sting"). 
Swelling or pain at groin(s), axilla(e) or neck (swollen lymph nodes/glands), allergic response (rash/itch) to materials
, foods, animals (e.g. cats); reaction to bee sting, unusual sneezing (in response to what), runny nose or itchy/teary eyes;
 food, medication or environmental allergy test(s) results.
 */
Block.prototype.immunologicalSymptoms = function () {
    this.DifficultyBreathing = []
    //(as a result of exposure to anything (and state what; e.g. "bee sting").
    this.anaphylaxis = []
    this.Swelling = []
    this.painAtGroin = []
    this.axillaOrNeckSwollenLymphNodes = []
    this.swollenGlands = []
    //(rash/itch)
    this.allergicResponsetoMterials = []
    this.allergicResponsetoFoods = []
    this.allergicResponsetoAnimals = []
    this.reactionToBeeSting = []
    //(in response to what)
    this.unusualSneezing = []
    this.runnyNose = []
    this.itchyTearyEyes = []
    this.medicationOrEnvironmentalAllergyTestResult = []

}

Block.prototype.pastHistory = function () {
    this.personalHistory = []
    this.presentHistory = []
    this.reviewOfSystems = []
    this.labInvestigation = []
    this.diagnosis = []
    this.medications = []
    this.treatementplan = []
    this.documentId = sha256(JSON.stringify(this.personalHistory) + JSON.stringify(this.presentHistory) + JSON.stringify(this.reviewOfSystems) + JSON.stringify(this.labInvestigation) + JSON.stringify(this.diagnosis) + JSON.stringify(this.medications) + JSON.stringify(this.treatementplan))
}

Block.prototype.labInvestigation = function (investigation) {
    this.investigationReport = investigation
    this.documentId = sha256(JSON.stringify(this.investigationReport))
}

Block.prototype.Diagnosis = function (diagnosis) {
    this.Diagnosis = diagnosis
    this.documentId = sha256(JSON.stringify(this.Diagnosis))
}

Block.prototype.medications = function (Mname, Dose, Every, For) {
    this.medicationName = Mname
    this.dose = Dose
    this.every = Every
    this.for = For
    this.documentId = sha256(JSON.stringify(this.medicationName) + JSON.stringify(this.dose) + JSON.stringify(this.every) + JSON.stringify(this.for))

}



//patient file
Block.prototype.medicalHistory = function () {
    this.personalHistory = []
    this.presentHistory = []
    this.reviewOfSystems = []
    this.pastHistory = []
    this.labInvestigation = []
    this.diagnosis = []
    this.medications = []
    this.treatementplan = []
    this.familyHistory = []
    this.documentId = sha256(JSON.stringify(this.personalHistory) + JSON.stringify(this.presentHistory) + JSON.stringify(this.reviewOfSystems) + JSON.stringify(this.pastHistory) + JSON.stringify(this.labInvestigation) + JSON.stringify(this.diagnosis) + JSON.stringify(this.medications) + JSON.stringify(this.treatementplan) + JSON.stringify(this.familyHistory))


}



function createNewGenesisRowBlockMedicalHistory(chiefComplain, releaseDate, citizenId, name, sex, age, occupation, marriedState, residence, habits) {
    const block = new Block();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    const newhealthC = new block.medicalHistory()
    const personalHistory = new block.personalHistory(chiefComplain, releaseDate, citizenId, name, sex, age, occupation, marriedState, residence, habits)
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now()
    newhealthC.personalHistory.push(personalHistory)
    block.medicalHistory.push(newhealthC)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}



function createNewRowBlockMedicalHistory(chiefComplain, releaseDate, citizenId, name, age, sex, occupation, marriedState, residence, habits) {
    const block = new Block();
    const newhealthC = new block.medicalHistory()
    const personalHistory = new block.personalHistory(chiefComplain, releaseDate, citizenId, name, age, sex, occupation, marriedState, residence, habits)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    newhealthC.personalHistory.push(personalHistory)
    block.medicalHistory.push(newhealthC)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}





function createNewColBlockMedicalHistoryPresentHistory(colno, location, system, quality, severity, duration, timing, context, modifyingFactors) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const medicalHistory = new colblock.medicalHistory()
        const presentHistory = new colblock.presentHistory(location, system, quality, severity, duration, timing, context, modifyingFactors)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        medicalHistory.personalHistory.push(...colB.medicalHistory.personalHistory)
        medicalHistory.presentHistory.push(...colB.medicalHistory.presentHistory)
        medicalHistory.reviewOfSystems.push(...colB.medicalHistory.reviewOfSystems)
        medicalHistory.pastHistory.push(...colB.medicalHistory.pastHistory)
        medicalHistory.labInvestigation.push(...colB.medicalHistory.labInvestigation)
        medicalHistory.diagnosis.push(...colB.medicalHistory.diagnosis)
        medicalHistory.medications.push(...colB.medicalHistory.medications)
        medicalHistory.treatementplan.push(...colB.medicalHistory.treatementplan)
        medicalHistory.familyHistory.push(...colB.medicalHistory.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        medicalHistory.presentHistory.push(presentHistory)
        colblock.medicalHistory.push(medicalHistory)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        const medicalHistory = new colblock.medicalHistory()
        const presentHistory = new colblock.presentHistory(location, system, quality, severity, duration, timing, context, modifyingFactors)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        medicalHistory.personalHistory.push(...colB.medicalHistory.personalHistory)
        medicalHistory.presentHistory.push(...colB.medicalHistory.presentHistory)
        medicalHistory.reviewOfSystems.push(...colB.medicalHistory.reviewOfSystems)
        medicalHistory.pastHistory.push(...colB.medicalHistory.pastHistory)
        medicalHistory.labInvestigation.push(...colB.medicalHistory.labInvestigation)
        medicalHistory.diagnosis.push(...colB.medicalHistory.diagnosis)
        medicalHistory.medications.push(...colB.medicalHistory.medications)
        medicalHistory.treatementplan.push(...colB.medicalHistory.treatementplan)
        medicalHistory.familyHistory.push(...colB.medicalHistory.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        medicalHistory.presentHistory.push(presentHistory)
        colblock.medicalHistory.push(medicalHistory)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}



function createNewColBlockMedicalHistoryReviewSystemSymptoms(colno, Wloss, Dsweats, Fati, Mala, Letha, Spattern, Appe, Feve, Itc, Ras, Rtrauma, Lum, Bum, Mass, Vchanges, Hache, Epain, Dvision, Bspots, AGPdown, Rhemorrhage, Afugax, Ear, Nos, Mout, Throa, Rnose, FNbleeds, Spain, Sears, earP, ringE, gingivalB, toothA, soreT, Pswallow, chestP, Sbreathe, excersiceIn, pn, orthoP, Oed, palp, faint, Lcons, clau, Cou, Spu, Whee, Haemop, SBre, exIN, abdomP, uniNweighL, Dswal, indig, bloat, cram, Lappe, foodAv, Naus, vomit, diarr, consti, INabG, vomB, brredblood, foul, dryB, dys, Huria, Nuria, Puria, Hesit, termDrib, decreFor, Dcha, pai, Mfre, Mreg, exusePad, stainCL, CLot, durat, Pai, firstD, grav, par, abor, mena, menop, contraC, lastS, Pn, Misalig, STmorn, STday, STimprovAct, STworse, jointS, DRmotion, crep, Fdef, arthri, prur, Rsh, Stri, lesi, woun, incis, acanth, nodul, tumo, ecze, exdry, discolo, breastP, sore, lumP, Dchar, chasigh, chansme, chahear, chantaste, seiz, fain, fit, funn, heada, needlS, numbn, limbwe, poorba, speepr, spindis, cogni, pshyco, Depr, sleepa, anxi, DConcen, bodyI, WSperfo, paran, anhedo, Lenerg, epiMani, changpersona, expanspers, sexbin, financ, orefcol, moods, sweat, diarrh, oligo, weLdes, trem, palpit, visual, prefhot, slo, tir, depres, thin, croakv, heavper, constiP, drski, polydi, polyur, polyph, dizz, swea, achH, hung, tongud, dtreatp, chronlblood, ortho, darksk, menar, cycdurfr, vagblee, birthcont, sexarous, diferec, sexaro, depres, lackstam, anem, purp, petec, hemod, afterinj, platdrug, hphil, granf, bdonat, dbrea, anaph, swel, pagro, axilnod, swogla, allermat, allerfood, alleranim, beets, unsneez, runno, itceye, medallerg) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const medicalHistory = new colblock.medicalHistory()
        medicalHistory.personalHistory.push(...colB.medicalHistory.personalHistory)
        medicalHistory.presentHistory.push(...colB.medicalHistory.presentHistory)
        medicalHistory.reviewOfSystems.push(...colB.medicalHistory.reviewOfSystems)
        medicalHistory.pastHistory.push(...colB.medicalHistory.pastHistory)
        medicalHistory.labInvestigation.push(...colB.medicalHistory.labInvestigation)
        medicalHistory.diagnosis.push(...colB.medicalHistory.diagnosis)
        medicalHistory.medications.push(...colB.medicalHistory.medications)
        medicalHistory.treatementplan.push(...colB.medicalHistory.treatementplan)
        medicalHistory.familyHistory.push(...colB.medicalHistory.familyHistory)
        const reviewOfSystems = new colblock.reviewOfSystems(Wloss, Dsweats, Fati, Mala, Letha, Spattern, Appe, Feve, Itc, Ras, Rtrauma, Lum, Bum, Mass, Vchanges, Hache, Epain, Dvision, Bspots, AGPdown, Rhemorrhage, Afugax, Ear, Nos, Mout, Throa, Rnose, FNbleeds, Spain, Sears, earP, ringE, gingivalB, toothA, soreT, Pswallow, chestP, Sbreathe, excersiceIn, pn, orthoP, Oed, palp, faint, Lcons, clau, Cou, Spu, Whee, Haemop, SBre, exIN, abdomP, uniNweighL, Dswal, indig, bloat, cram, Lappe, foodAv, Naus, vomit, diarr, consti, INabG, vomB, brredblood, foul, dryB, dys, Huria, Nuria, Puria, Hesit, termDrib, decreFor, Dcha, pai, Mfre, Mreg, exusePad, stainCL, CLot, durat, Pai, firstD, grav, par, abor, mena, menop, contraC, lastS, Pn, Misalig, STmorn, STday, STimprovAct, STworse, jointS, DRmotion, crep, Fdef, arthri, prur, Rsh, Stri, lesi, woun, incis, acanth, nodul, tumo, ecze, exdry, discolo, breastP, sore, lumP, Dchar, chasigh, chansme, chahear, chantaste, seiz, fain, fit, funn, heada, needlS, numbn, limbwe, poorba, speepr, spindis, cogni, pshyco, Depr, sleepa, anxi, DConcen, bodyI, WSperfo, paran, anhedo, Lenerg, epiMani, changpersona, expanspers, sexbin, financ, orefcol, moods, sweat, diarrh, oligo, weLdes, trem, palpit, visual, prefhot, slo, tir, depres, thin, croakv, heavper, constiP, drski, polydi, polyur, polyph, dizz, swea, achH, hung, tongud, dtreatp, chronlblood, ortho, darksk, menar, cycdurfr, vagblee, birthcont, sexarous, diferec, sexaro, depres, lackstam, anem, purp, petec, hemod, afterinj, platdrug, hphil, granf, bdonat, dbrea, anaph, swel, pagro, axilnod, swogla, allermat, allerfood, alleranim, beets, unsneez, runno, itceye, medallerg)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        medicalHistory.reviewOfSystems.push(reviewOfSystems)
        colblock.medicalHistory.push(medicalHistory)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        const medicalHistory = new colblock.medicalHistory()
        medicalHistory.personalHistory.push(...colB.medicalHistory.personalHistory)
        medicalHistory.presentHistory.push(...colB.medicalHistory.presentHistory)
        medicalHistory.reviewOfSystems.push(...colB.medicalHistory.reviewOfSystems)
        medicalHistory.pastHistory.push(...colB.medicalHistory.pastHistory)
        medicalHistory.labInvestigation.push(...colB.medicalHistory.labInvestigation)
        medicalHistory.diagnosis.push(...colB.medicalHistory.diagnosis)
        medicalHistory.medications.push(...colB.medicalHistory.medications)
        medicalHistory.treatementplan.push(...colB.medicalHistory.treatementplan)
        medicalHistory.familyHistory.push(...colB.medicalHistory.familyHistory)
        const reviewOfSystems = new colblock.reviewOfSystems(Wloss, Dsweats, Fati, Mala, Letha, Spattern, Appe, Feve, Itc, Ras, Rtrauma, Lum, Bum, Mass, Vchanges, Hache, Epain, Dvision, Bspots, AGPdown, Rhemorrhage, Afugax, Ear, Nos, Mout, Throa, Rnose, FNbleeds, Spain, Sears, earP, ringE, gingivalB, toothA, soreT, Pswallow, chestP, Sbreathe, excersiceIn, pn, orthoP, Oed, palp, faint, Lcons, clau, Cou, Spu, Whee, Haemop, SBre, exIN, abdomP, uniNweighL, Dswal, indig, bloat, cram, Lappe, foodAv, Naus, vomit, diarr, consti, INabG, vomB, brredblood, foul, dryB, dys, Huria, Nuria, Puria, Hesit, termDrib, decreFor, Dcha, pai, Mfre, Mreg, exusePad, stainCL, CLot, durat, Pai, firstD, grav, par, abor, mena, menop, contraC, lastS, Pn, Misalig, STmorn, STday, STimprovAct, STworse, jointS, DRmotion, crep, Fdef, arthri, prur, Rsh, Stri, lesi, woun, incis, acanth, nodul, tumo, ecze, exdry, discolo, breastP, sore, lumP, Dchar, chasigh, chansme, chahear, chantaste, seiz, fain, fit, funn, heada, needlS, numbn, limbwe, poorba, speepr, spindis, cogni, pshyco, Depr, sleepa, anxi, DConcen, bodyI, WSperfo, paran, anhedo, Lenerg, epiMani, changpersona, expanspers, sexbin, financ, orefcol, moods, sweat, diarrh, oligo, weLdes, trem, palpit, visual, prefhot, slo, tir, depres, thin, croakv, heavper, constiP, drski, polydi, polyur, polyph, dizz, swea, achH, hung, tongud, dtreatp, chronlblood, ortho, darksk, menar, cycdurfr, vagblee, birthcont, sexarous, diferec, sexaro, depres, lackstam, anem, purp, petec, hemod, afterinj, platdrug, hphil, granf, bdonat, dbrea, anaph, swel, pagro, axilnod, swogla, allermat, allerfood, alleranim, beets, unsneez, runno, itceye, medallerg)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        medicalHistory.reviewOfSystems.push(reviewOfSystems)
        colblock.medicalHistory.push(medicalHistory)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}


localStorage.removeItem('blockChain')
