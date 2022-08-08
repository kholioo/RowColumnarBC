const express = require('express')
const app = express()
const sha256 = require('sha256')
const bodyparser = require('body-parser')
const { json } = require('body-parser')
const rp = require('request-promise')
const blockCenter = require('./blockchain')

const transRestate = blockCenter.transrealestate
const transCar = blockCenter.transcar
let blockChain = blockCenter.blockChain
const Block = blockCenter.Block
const genesisrowBlocknationalid = blockCenter.createNewGenesisRowBlocknationalId
const rowBlocknationalid = blockCenter.createNewRowBlocknationalId
const colBlockcl = blockCenter.createNewColBlockcarLicense
const blockChainIsValid = blockCenter.blockChainIsValid
const blockDataIsValid = blockCenter.blockDataIsValid
const rentObligation = blockCenter.rentObligation
const getLastCoblock = blockCenter.getLastCoBlock
const colBlockdl = blockCenter.createNewColBlockdrivingLicense
const colblockpassport = blockCenter.createNewColBlockpassport
const colBlockbc = blockCenter.createNewColBlockbirthCertificate
const colBlockhc = blockCenter.createNewColBlockhealthCertificate
let port = process.argv[2]
const cron = require('node-cron')
let ejs = require('ejs')
const colBlockcc = blockCenter.createNewColBlockcollegecertificate
const colBlockm = blockCenter.createNewColBlockmoney
const transMoney = blockCenter.transMoney
const realestate = blockCenter.createNewColBlockrealestateLicense
const SPCrealestate = blockCenter.realestateSPcontract
const RCrealestate = blockCenter.realestateRentContract
const wc = blockCenter.workcontract
const mc = blockCenter.marriageContract
const loan = blockCenter.loanContract
const carcontract = blockCenter.carSPcontract
const rent = blockCenter.rentObligation
const dataTypesIsValid = blockCenter.dataTypesIsValid
const encrypt = blockCenter.encryptpublic
const encrypted = blockCenter.encryptedblockChain
const updatebc = blockCenter.updatebc
const genesisbirth = blockCenter.createNewGenesisRowBlockbirthCertificate
const rowbirth = blockCenter.createNewRowBlockbirthCertificate
const extract = blockCenter.extractnationalid
const colnationalid = blockCenter.createNewColBlocknationalId





//cron.schedule('* * * * *', () => {
//  console.log(blockChainIsValid(blockChain))


//})

//cron.schedule('* * * * *', () => {
//  console.log(encrypt())


//});



app.set('view engine', 'pug');
app.set('views', './views');





app.use(express.static("public"));

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.get('/', (req, res) => {

    res.render('login.ejs')




})

app.get('/fingerprint', (req, res) => {
    res.render('fingerprint.ejs')
})

app.get('/home', (req, res) => {
    let block = getLastCoblock(process.argv[4])
    let carLicense = block.carLicense[0]
    let nationalarr = block.nationalId
    let nationalId = block.nationalId[0]
    let name = nationalId.fullName
    let collegec = block.collegeCertificate[0]
    let passport = block.passport[0]
    let drivingLicense = block.drivingLicense[0]
    let birthcertificate = block.birthCertificate[0]
    let healthcertificate = block.healthCertificate[0]
    let healthstate = healthcertificate.healthState
    let hdate = healthcertificate.releaseDate
    let birthdate = birthcertificate.birthDate
    let father = birthcertificate.fatherName
    let mother = birthcertificate.mothername
    let place = birthcertificate.placeofBirth
    let country = passport.country
    let nationality = passport.nationality
    let releasedate = collegec.releaseDate
    let studentid = collegec.studentId
    let faculty = collegec.faculty
    let degree = collegec.degree
    let img = drivingLicense.img
    let dateend = carLicense.dateEnd
    let documentid = carLicense.documentId
    let chassisNo = carLicense.chassisNo
    let motorNo = carLicense.motorNo
    let carType = carLicense.carType
    let editdate = carLicense.editingHistory



    res.render('home.pug', { img: img, name: name, chassisno: chassisNo, motorno: motorNo, documentid: documentid, dateend: dateend, cartype: carType, editdate: editdate, releasedate: releasedate, studentid: studentid, faculty: faculty, degree: degree, country: country, nationality: nationality, birthdate: birthdate, place: place, father: father, mother: mother, hdate: hdate, healthstate: healthstate, nationalarr: nationalarr, nationalId: nationalId })

})
app.get('/id', (req, res) => {
    let block = getLastCoblock(process.argv[4])
    let moneyarr = block.money
    res.render('money.pug', { blockchain: blockChain, getLastCoBlock: getLastCoblock, colno: process.argv[4], moneyarr: moneyarr })
}
)

app.get('/qr', (req, res) => {
    res.render('QR.ejs')

})

app.get('/mqr', (req, res) => {
    res.render('mqr.ejs')
})

app.get('/trans', (req, res) => {
    res.render('trans.ejs')
})

app.get('/transactions', (req, res) => {
    let block = getLastCoblock(process.argv[4])
    let transarray = block.transactions
    res.render('transes.pug', { blockchain: blockChain, colno: process.argv[4], transarray: transarray, block: block })
})
app.get('/estate', (req, res) => {
    let block = getLastCoblock(process.argv[4])
    let estatearray = block.realestateLicense
    res.render('estates.pug', { blockchain: blockChain, colno: process.argv[4], estatearray: estatearray, block: block })
})

app.get('/salepurchase', (req, res) => {
    res.render('salepurchase.ejs')
})
app.get('/success', (req, res) => {

    res.render('success.ejs')
})

app.get('/rent', (req, res) => {
    res.render('rent.ejs')
})

app.get('/rentsuccess', (req, res) => {
    res.render('rentsuccess.ejs')
})

app.get('/contract', (req, res) => {
    res.render('contract.ejs')
})
app.get('/c', (req, res) => {
    let block = getLastCoblock(process.argv[4])
    let Rarr = block.rentContract
    let estatearray = block.realestateLicense


    res.render('rc.pug', { blockchain: blockChain, colno: process.argv[4], Rarr: Rarr, block: block, estatearray: estatearray })
})
app.get('/sp', (req, res) => {
    let block = getLastCoblock(process.argv[4])
    let SParr = block.salePurchaseContract
    res.render('spc.pug', { blockchain: blockChain, colno: process.argv[4], SParr: SParr, block: block })
})
app.get('/wedding', (req, res) => {
    let block = getLastCoblock(process.argv[4])
    let marr = block.marriageContract
    res.render('marriage.pug', { blockchain: blockChain, colno: process.argv[4], marr: marr, block: block })
})

app.get('/work', (req, res) => {

    let block = getLastCoblock(process.argv[4])
    let warr = block.workContract
    res.render('w.pug', { blockchain: blockChain, colno: process.argv[4], warr: warr, block: block })
})

app.get('/loan', (req, res) => {
    let block = getLastCoblock(process.argv[4])
    let larr = block.loanContract
    res.render('lc.pug', { blockchain: blockChain, colno: process.argv[4], larr: larr, block: block })
})
app.get('/car', (req, res) => {
    let block = getLastCoblock(process.argv[4])
    let carr = block.carLicense
    res.render('car.pug', { blockchain: blockChain, colno: process.argv[4], carr: carr, block: block })
})

app.get('/createloancontract', (req, res) => {
    res.render('createloan.ejs')
})

app.get('/creatework', (req, res) => {
    res.render('creatework.ejs')
})

app.get('/createwedding', (req, res) => {
    res.render('createwedding.ejs')
})

app.get('/createcarspc', (req, res) => {
    res.render('carspc.ejs')
})



app.get('/blockChain', (req, res) => {

    res.send(blockChain)

})

app.get('/encryptedblockChain', (req, res) => {

    res.send(encrypted)

})

app.get('/government', (req, res) => {

    res.render('government.ejs')
})

app.post('/blockChain/nationalid', (req, res) => {



    colnationalid(req.body[0].colno, req.body[0].fullName, req.body[0].address, req.body[0].gender, req.body[0].id, req.body[0].job, req.body[0].img)
    colnationalid(req.body[1].colno, req.body[1].fullName, req.body[1].address, req.body[1].gender, req.body[1].id, req.body[1].job, req.body[1].img)
    colnationalid(req.body[2].colno, req.body[2].fullName, req.body[2].address, req.body[2].gender, req.body[2].id, req.body[2].job, req.body[2].img)
    colnationalid(req.body[3].colno, req.body[3].fullName, req.body[3].address, req.body[3].gender, req.body[3].id, req.body[3].job, req.body[3].img)
    colnationalid(req.body[4].colno, req.body[4].fullName, req.body[4].address, req.body[4].gender, req.body[4].id, req.body[4].job, req.body[4].img)


    res.send(blockChain)

})

app.post('/birthcertificat', (req, res) => {
    genesisbirth(req.body[0].birthdate, req.body[0].fathername, req.body[0].mothername, req.body[0].birthplace, req.body[0].name, req.body[0].id)
    rowbirth(req.body[1].birthdate, req.body[1].fathername, req.body[1].mothername, req.body[1].birthplace, req.body[1].name, req.body[1].id)
    rowbirth(req.body[2].birthdate, req.body[2].fathername, req.body[2].mothername, req.body[2].birthplace, req.body[2].name, req.body[2].id)
    rowbirth(req.body[3].birthdate, req.body[3].fathername, req.body[3].mothername, req.body[3].birthplace, req.body[3].name, req.body[3].id)
    rowbirth(req.body[4].birthdate, req.body[4].fathername, req.body[4].mothername, req.body[4].birthplace, req.body[4].name, req.body[4].id)
    res.send(blockChain)

})

app.post('/extractnationalid', (req, res) => {
    extract()
    res.render('success.ejs')
})

app.post('/blockChain/carlicense', (req, res) => {
    colBlockcl(req.body[0].colno, req.body[0].fullName, req.body[0].address, req.body[0].CLdateEnd, req.body[0].cleditingHistory, req.body[0].job, req.body[0].chassisNo, req.body[0].motorNo, req.body[0].carType, req.body[0].img0, req.body[0].img1, req.body[0].img2, req.body[0].img3)
    colBlockcl(req.body[1].colno, req.body[1].fullName, req.body[1].address, req.body[1].CLdateEnd, req.body[1].cleditingHistory, req.body[1].job, req.body[1].chassisNo, req.body[1].motorNo, req.body[1].carType, req.body[1].img0, req.body[1].img1, req.body[1].img2, req.body[1].img3)
    colBlockcl(req.body[2].colno, req.body[2].fullName, req.body[2].address, req.body[2].CLdateEnd, req.body[2].cleditingHistory, req.body[2].job, req.body[2].chassisNo, req.body[2].motorNo, req.body[2].carType, req.body[2].img0, req.body[2].img1, req.body[2].img2, req.body[2].img3)
    colBlockcl(req.body[3].colno, req.body[3].fullName, req.body[3].address, req.body[3].CLdateEnd, req.body[3].cleditingHistory, req.body[3].job, req.body[3].chassisNo, req.body[3].motorNo, req.body[3].carType, req.body[3].img0, req.body[3].img1, req.body[3].img2, req.body[3].img3)
    colBlockcl(req.body[4].colno, req.body[4].fullName, req.body[4].address, req.body[4].CLdateEnd, req.body[4].cleditingHistory, req.body[4].job, req.body[4].chassisNo, req.body[4].motorNo, req.body[4].carType, req.body[4].img0, req.body[4].img1, req.body[4].img2, req.body[4].img3)
})

app.post('/blockChain/drivinglicense', (req, res) => {
    colBlockdl(req.body[0].colno, req.body[0].fullName, req.body[0].address, req.body[0].dldateEnd, req.body[0].dleditingHistory, req.body[0].job, req.body[0].documentid, req.body[0].img)
    colBlockdl(req.body[1].colno, req.body[1].fullName, req.body[1].address, req.body[1].dldateEnd, req.body[1].dleditingHistory, req.body[1].job, req.body[1].documentid, req.body[1].img)
    colBlockdl(req.body[2].colno, req.body[2].fullName, req.body[2].address, req.body[2].dldateEnd, req.body[2].dleditingHistory, req.body[2].job, req.body[2].documentid, req.body[2].img)
    colBlockdl(req.body[3].colno, req.body[3].fullName, req.body[3].address, req.body[3].dldateEnd, req.body[3].dleditingHistory, req.body[3].job, req.body[3].documentid, req.body[3].img)
    colBlockdl(req.body[4].colno, req.body[4].fullName, req.body[4].address, req.body[4].dldateEnd, req.body[4].dleditingHistory, req.body[4].job, req.body[4].documentid, req.body[4].img)
})

app.post('/blockChain/collegecertificate', (req, res) => {
    colBlockcc(req.body[0].colno, req.body[0].releaseDate, req.body[0].studentId, req.body[0].faculty, req.body[0].degree)
    colBlockcc(req.body[1].colno, req.body[1].releaseDate, req.body[1].studentId, req.body[1].faculty, req.body[1].degree)
    colBlockcc(req.body[2].colno, req.body[2].releaseDate, req.body[2].studentId, req.body[2].faculty, req.body[2].degree)
    colBlockcc(req.body[3].colno, req.body[3].releaseDate, req.body[3].studentId, req.body[3].faculty, req.body[3].degree)
    colBlockcc(req.body[4].colno, req.body[4].releaseDate, req.body[4].studentId, req.body[4].faculty, req.body[4].degree)

})

app.post('/blockChain/passport', (req, res) => {
    colblockpassport(req.body[0].colno, req.body[0].country, req.body[0].nationality, req.body[0].fullname, req.body[0].gender, req.body[0].job)
    colblockpassport(req.body[1].colno, req.body[1].country, req.body[1].nationality, req.body[1].fullname, req.body[1].gender, req.body[1].job)
    colblockpassport(req.body[2].colno, req.body[2].country, req.body[2].nationality, req.body[2].fullname, req.body[2].gender, req.body[2].job)
    colblockpassport(req.body[3].colno, req.body[3].country, req.body[3].nationality, req.body[3].fullname, req.body[3].gender, req.body[3].job)
    colblockpassport(req.body[4].colno, req.body[4].country, req.body[4].nationality, req.body[4].fullname, req.body[4].gender, req.body[4].job)

})


app.post('/blockChain/birthcertificate', (req, res) => {
    colBlockbc(req.body[0].colno, req.body[0].birthdate, req.body[0].fathername, req.body[0].mothername, req.body[0].birthplace, req.body[0].name, req.body[0].id)
    colBlockbc(req.body[1].colno, req.body[1].birthdate, req.body[1].fathername, req.body[1].mothername, req.body[1].birthplace, req.body[1].name, req.body[1].id)
    colBlockbc(req.body[2].colno, req.body[2].birthdate, req.body[2].fathername, req.body[2].mothername, req.body[2].birthplace, req.body[2].name, req.body[2].id)
    colBlockbc(req.body[3].colno, req.body[3].birthdate, req.body[3].fathername, req.body[3].mothername, req.body[3].birthplace, req.body[3].name, req.body[3].id)
    colBlockbc(req.body[4].colno, req.body[4].birthdate, req.body[4].fathername, req.body[4].mothername, req.body[4].birthplace, req.body[4].name, req.body[4].id)

})

app.post('/blockChain/healthcertificate', (req, res) => {
    colBlockhc(req.body[0].colno, req.body[0].releasedate, req.body[0].citizenid, req.body[0].healthstate)
    colBlockhc(req.body[1].colno, req.body[1].releasedate, req.body[1].citizenid, req.body[1].healthstate)
    colBlockhc(req.body[2].colno, req.body[2].releasedate, req.body[2].citizenid, req.body[2].healthstate)
    colBlockhc(req.body[3].colno, req.body[3].releasedate, req.body[3].citizenid, req.body[3].healthstate)
    colBlockhc(req.body[4].colno, req.body[4].releasedate, req.body[4].citizenid, req.body[4].healthstate)
})

app.post('/blockchain/money', (req, res) => {
    colBlockm(req.body[0].colno, req.body[0].bankname, req.body[0].amount, req.body[0].nationalid, req.body[0].img)
    colBlockm(req.body[1].colno, req.body[1].bankname, req.body[1].amount, req.body[1].nationalid, req.body[1].img)
    colBlockm(req.body[2].colno, req.body[2].bankname, req.body[2].amount, req.body[2].nationalid, req.body[2].img)
    colBlockm(req.body[3].colno, req.body[3].bankname, req.body[3].amount, req.body[3].nationalid, req.body[3].img)
    colBlockm(req.body[4].colno, req.body[4].bankname, req.body[4].amount, req.body[4].nationalid, req.body[4].img)

})

app.post('/transmoney', (req, res) => {
    let privateKey = new Object(req.body.privateKey)



    transMoney(req.body.senderid, req.body.recepientid, process.argv[4], req.body.recepientcolno, req.body.amount, req.body.senderbankname, req.body.recepientbankname, privateKey)
    let block = getLastCoblock(process.argv[4])
    let moneyarr = block.money
    res.render('money.pug', { blockchain: blockChain, getLastCoBlock: getLastCoblock, colno: process.argv[4], moneyarr: moneyarr })

})

app.post('/blockchain/realestatelicense', (req, res) => {
    realestate(req.body[0].colno, req.body[0].img0, req.body[0].img1, req.body[0].img2, req.body[0].img3, req.body[0].propretysize, req.body[0].lotsize, req.body[0].rooms, req.body[0].garages, req.body[0].yearbuilt, req.body[0].availablefrom, req.body[0].bathrooms, req.body[0].structureType, req.body[0].address, req.body[0].releaseDate, req.body[0].ownerId, req.body[0].tenant, req.body[0].price, req.body[0].googleaddress)
    realestate(req.body[1].colno, req.body[1].img0, req.body[1].img1, req.body[1].img2, req.body[1].img3, req.body[1].propretysize, req.body[1].lotsize, req.body[1].rooms, req.body[1].garages, req.body[1].yearbuilt, req.body[1].availablefrom, req.body[1].bathrooms, req.body[1].structureType, req.body[1].address, req.body[1].releaseDate, req.body[1].ownerId, req.body[1].tenant, req.body[1].price, req.body[1].googleaddress)
    realestate(req.body[2].colno, req.body[2].img0, req.body[2].img1, req.body[2].img2, req.body[2].img3, req.body[2].propretysize, req.body[2].lotsize, req.body[2].rooms, req.body[2].garages, req.body[2].yearbuilt, req.body[2].availablefrom, req.body[2].bathrooms, req.body[2].structureType, req.body[2].address, req.body[2].releaseDate, req.body[2].ownerId, req.body[2].tenant, req.body[2].price, req.body[2].googleaddress)
    realestate(req.body[3].colno, req.body[3].img0, req.body[3].img1, req.body[3].img2, req.body[3].img3, req.body[3].propretysize, req.body[3].lotsize, req.body[3].rooms, req.body[3].garages, req.body[3].yearbuilt, req.body[3].availablefrom, req.body[3].bathrooms, req.body[3].structureType, req.body[3].address, req.body[3].releaseDate, req.body[3].ownerId, req.body[3].tenant, req.body[3].price, req.body[3].googleaddress)
    realestate(req.body[4].colno, req.body[4].img0, req.body[4].img1, req.body[4].img2, req.body[4].img3, req.body[4].propretysize, req.body[4].lotsize, req.body[4].rooms, req.body[4].garages, req.body[4].yearbuilt, req.body[4].availablefrom, req.body[4].bathrooms, req.body[4].structureType, req.body[4].address, req.body[4].releaseDate, req.body[4].ownerId, req.body[4].tenant, req.body[4].price, req.body[4].googleaddress)
    res.send(blockChain)
})

app.post('/obligate', (req, res) => {
    rent()
    res.render('success.ejs')
})
app.post('/realestateSPC', (req, res) => {
    let buyercolno = Number(req.body.buyercolno)
    let sellercolno = Number(req.body.sellercolno)
    let purchaseValue = Number(req.body.purchaseValue)
    let buyerbankname = String(req.body.buyerbankname)
    let sellerbankname = String(req.body.sellerbankname)

    SPCrealestate(sellercolno, buyercolno, req.body.buyerId, req.body.sellerId, req.body.sellername, req.body.buyername, req.body.sellercoowner, req.body.buyercoowner, req.body.addressseller, req.body.addressbuyer, purchaseValue, sellerbankname, buyerbankname, req.body.propretyid, req.body.privatekey)
    res.render('success.ejs')
})

app.post('/RCrealestate', (req, res) => {
    let pay = Number(req.body.pay)
    let foryears = Number(req.body.foryears)
    RCrealestate(req.body.lessorcolno, req.body.tenantcolno, req.body.tenantaddress, req.body.lessoraddress, req.body.valuedocumentid, req.body.lessorphone, req.body.tenantphone, req.body.endDate, pay, foryears, req.body.pentalyclause, req.body.tenantbankname, req.body.lessorbankname, req.body.tenantId, req.body.lessorId, req.body.lessorname, req.body.tenantname, req.body.privatekey, req.body.releaseDate)
    res.render('rentsuccess.ejs')
})
app.post('/workContract', (req, res) => {
    let salary = Number(req.body.monthsalary)
    let clause = Number(req.body.pentalyclause)
    wc(req.body.companyId, req.body.employerId, req.body.companybankName, req.body.employerbankName, req.body.companycolno, req.body.employercolno, req.body.companyname, req.body.companyaddress, req.body.employername, req.body.employeraddress, req.body.employerposition, req.body.employercountry, req.body.workhours, req.body.workdays, salary, req.body.endDate, clause, req.body.privatekey)
    res.render('loansuccess.ejs')
})

app.post('/marriagecontract', (req, res) => {
    mc(process.argv[4], req.body.bridename, req.body.brideaddress, req.body.bridephone, req.body.bridemail, req.body.groomname, req.body.groomaddress, req.body.groomphone, req.body.groommail, req.body.dowry, req.body.privatekey)
    res.render('weddingsuccess.ejs')
})

app.post('/loanContract', (req, res) => {
    let pay = Number(req.body.pay)
    let benefit = Number(req.body.benefit)
    let amount = Number(req.body.amount)
    loan(process.argv[4], req.body.borrowercolno, req.body.lenderId, req.body.lendername, req.body.lenderaddress, req.body.lenderbankname, req.body.borrowername, req.body.borroweraddress, req.body.borrowerbankname, req.body.borrowerId, amount, pay, req.body.endDate, benefit, req.body.guarantee, req.body.privatekey)
    res.render('loansuccess.ejs')
})


app.post('/carspcontrct', (req, res) => {
    carcontract(req.body.sellercolno, req.body.buyercolno, req.body.sellerId, req.body.buyerId, req.body.sellername, req.body.buyername, req.body.sellercoowner, req.body.buyercoowner, req.body.addressseller, req.body.addressbuyer, req.body.purchaseValue, req.body.propretyId, req.body.sellercolno, req.body.buyercolno, req.body.buyerbankname, req.body.sellerbankname, req.body.buyerjob, req.body.chassisNo, req.body.carType, req.body.privatekey)
    res.render('success.ejs')
})

app.post('/blockChain', (req, res) => {

    let blockchain = req.body.blockChain
    updatebc(blockchain)
    res.send('DONE')

})








app.post('/blockChain/transmoney/broadcast', (req, res) => {



    const requestPromises = []
    let networkNodes = ['http://localhost:3002',
        'http://localhost:3003',
        'http://localhost:3004',
        'http://localhost:3005',
        'http://localhost:3006'
    ]
    let senderid = req.body.senderid
    let recepientid = req.body.recepientid
    let recepientcolno = req.body.recepientcolno
    let amount = req.body.amount
    let senderbankName = req.body.senderbankname
    let recepientbankName = req.body.recepientbankname
    let privateKey = req.body.privateKey
    let sendercolno = req.body.sendercolno

    networkNodes.forEach(networkNodeUrl => {
        const requestOptions = {
            uri: networkNodeUrl + '/transmoney',
            method: 'POST',
            body: {
                senderid: senderid
                , recepientid: recepientid
                , sendercolno: sendercolno
                , recepientcolno: recepientcolno
                , amount: amount
                , senderbankName: senderbankName
                , recepientbankname: recepientbankName
                , privatekey: privateKey
            },
            json: true
        }
        requestPromises.push(rp(requestOptions))
    })
    Promise.all(requestPromises)
        .then(blockChains => {
            const hashblockchain = []
            const nodes = []
            blockChains.forEach(blockchain => {
                const hash = sha256(JSON.stringify(blockchain))
                const nodeurl = blockChain.currentNodeUrl
                hashblockchain.push(hash)
                nodes.push(nodeurl)


            })
            hashblockchain.forEach(hashedb => {
                const previoushashedb = hashblockchain[hashblockchain.indexOf(hashedb) - 1]

                if (hashblockchain.indexOf(hashedb) !== 0) {
                    if (hashedb === previoushashedb) {
                        return "block chains trans is full approved"
                    } else {
                        const notvalidbc = hashblockchain.find((element, index) => {
                            if (index !== 0) {
                                element !== element[index - 1]

                            }

                        })

                        const rejectedNodeIndex = hashblockchain.indexOf(notvalidbc)
                        const getrejectNode = nodes[rejectedNodeIndex]
                        const requestOptions = {
                            uri: getrejectNode + '/blockChain',
                            method: 'POST',
                            body: blockChain,
                            json: true
                        }
                        rq(requestOptions)



                    }
                }
            })
        })

})






app.post('/register-broadcast-node', (req, res) => {
    const newNodeUrl = req.body.newNodeUrl;

    const regNodesPromises = [];
    if (blockChain.networkNodes.indexOf(newNodeUrl)) { blockChain.networkNodes.push(newNodeUrl) }
    blockChain.networkNodes.forEach(networkNodeUrl => {

        const requestOptions = {
            uri: networkNodeUrl + '/register-node',
            method: 'POST',
            body: { newNodeUrl: newNodeUrl },
            json: true
        }
        regNodesPromises.push(rp(requestOptions))

    });
    Promise.all(regNodesPromises)
        .then(data => {
            const bulkRegisterOptions = {
                uri: newNodeUrl + '/register-nodes-bulk',
                method: 'POST',
                body: { allNetworkNodes: [...blockChain.networkNodes, blockChain.currentNodeUrl] },
                json: true

            }
            return rq(bulkRegisterOptions)

        })
        .then(data => {
            res.json({ note: 'New node registered with network successfully' })
        })
})

app.post('/register-node', (req, res) => {
    const newNodeUrl = req.body.newNodeUrl;
    const nodeNotAlreadyPresent = blockChain.networkNodes.indexOf(newNodeUrl) == -1;
    const notCurrentNode = blockChain.currentNodeUrl !== newNodeUrl;
    if (nodeNotAlreadyPresent && notCurrentNode) { blockChain.networkNodes.push(newNodeUrl); }


    res.json({ note: 'New node registered with network successfully' })

})


app.post('/register-nodes-bulk', (req, res) => {
    const allNetworkNodes = req.body.allNetworkNodes;
    allNetworkNodes.forEach(networkNodeUrl => {
        const nodeNotAlreadyPresent = blockChain.networkNodes.indexOf(networkNodeUrl) == -1;
        const notCurrentNode = blockChain.currentNodeUrl !== networkNodeUrl;
        if (nodeNotAlreadyPresent && notCurrentNode) { blockChain.networkNodes.push(networkNodeUrl); }


    })
    res.json({ note: 'bulk registeration success' })

})




app.listen(port, function () {
    console.log(`listening on ${port}`)
})





