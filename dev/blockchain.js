/*
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
    this.money = []
    this.transactions = []
    this.nationalId = []
    this.passport = []
    this.drivingLicense = []
    this.carLicense = []
    this.realestateLicense = []
    this.rentContract = []
    this.salePurchaseContract = []
    this.marriageContract = []
    this.workContract = []
    this.loanContract = []
    this.healthCertificate = []
    this.collegeCertificate = []
    this.intellectualProperty = []
    this.birthCertificate = []
    this.deathCertificate = []
    this.voteCard = []


}




Block.prototype.moneyAmount = function (bankName, amount, id, img) {


    this.bankName = bankName
    this.amount = amount;
    this.id = id;
    this.img = img
    this.documentId = sha256(JSON.stringify(this.bankName) + JSON.stringify(this.amount) + JSON.stringify(this.id) + JSON.stringify(this.img))

}

Block.prototype.Transactions = function (senderId, recepientId, senderbankname, recepientbankname, value) {
    this.senderId = senderId
    this.recepientId = recepientId
    this.amount = value
    this.senderbankname = senderbankname
    this.recepientbankname = recepientbankname
    this.documentId = sha256(JSON.stringify(this.senderId) + JSON.stringify(this.recepientId) + JSON.stringify(this.amount) + JSON.stringify(this.senderbankname) + JSON.stringify(this.recepientbankname))
}




Block.prototype.NationalId = function (fullName, address, gender, id, job, img) {
    this.fullName = fullName;
    this.address = address;
    this.gender = gender;
    this.id = id;
    this.job = job
    this.img = img
    this.documentId = sha256(JSON.stringify(this.fullName) + JSON.stringify(this.address) + JSON.stringify(this.gender) + JSON.stringify(this.id) + JSON.stringify(this.job) + JSON.stringify(this.img))


};

Block.prototype.Passport = function (country, nationality, fullname, Gender, Job) {
    this.country = country;
    this.nationality = nationality;
    this.fullname = fullname;
    this.gender = Gender;
    this.job = Job
    this.documentId = sha256(JSON.stringify(this.country) + JSON.stringify(this.nationality) + JSON.stringify(this.fullname) + JSON.stringify(this.gender) + JSON.stringify(this.job))

}

Block.prototype.DrivingLicense = function (fullName, address, DLdateEnd, DLeditingHistory, job, documentId, img) {
    this.fullName = fullName;
    this.address = address;
    this.dateEnd = DLdateEnd;
    this.editingHistory = DLeditingHistory;
    this.job = job;
    this.documentId = documentId;
    this.img = img
    this.documentId = sha256(JSON.stringify(this.fullName) + JSON.stringify(this.address) + JSON.stringify(this.dateEnd) + JSON.stringify(this.editingHistory) + JSON.stringify(this.job) + JSON.stringify(this.documentId) + JSON.stringify(this.img))

};


Block.prototype.CarLicense = function (fullName, address, CLdateEnd, CLeditingHistory, job, chassisNo, motorNo, carType, img0, img1, img2, img3) {
    this.fullName = fullName;
    this.address = address;
    this.dateEnd = new Date(CLdateEnd);
    this.editingHistory = new Date(CLeditingHistory);
    this.job = job;
    this.chassisNo = chassisNo
    this.motorNo = motorNo;
    this.carType = carType;
    this.img0 = img0
    this.img1 = img1
    this.img2 = img2
    this.img3 = img3
    this.documentId = sha256(JSON.stringify(this.fullName) + JSON.stringify(this.address) + JSON.stringify(this.dateEnd) + JSON.stringify(this.editingHistory) + JSON.stringify(this.job) + JSON.stringify(this.chassisNo) + JSON.stringify(this.motorNo) + JSON.stringify(this.carType) + JSON.stringify(this.img0) + JSON.stringify(this.img1) + JSON.stringify(this.img2) + JSON.stringify(this.img3));

}


Block.prototype.RealestateLicense = function (img0, img1, img2, img3, propretysize, lotsize, rooms, garages, yearbuilt, availablefrom, bathrooms, structureType, address, REreleaseDate, ownerId, tenant, price, gaddress) {
    this.img0 = img0
    this.img1 = img1
    this.img2 = img2
    this.img3 = img3
    this.propretysize = propretysize
    this.lotsize = lotsize
    this.price = price
    this.rooms = rooms
    this.garages = garages
    this.yearbuilt = new Date(yearbuilt)
    this.availablefrom = new Date(availablefrom)
    this.bathrooms = bathrooms
    this.structureType = structureType
    this.address = address
    this.REreleaseDate = new Date(REreleaseDate)
    this.ownerId = ownerId
    this.tenant = tenant
    this.gaddress = gaddress
    this.documentId = sha256(JSON.stringify(this.img0) + JSON.stringify(this.img1) + JSON.stringify(this.img2) + JSON.stringify(this.img3) + JSON.stringify(this.propretysize) + JSON.stringify(this.lotsize) + JSON.stringify(this.rooms) + JSON.stringify(this.garages) + JSON.stringify(this.yearbuilt) + JSON.stringify(this.availablefrom) + JSON.stringify(this.bathrooms) + JSON.stringify(this.structureType) + JSON.stringify(this.address) + JSON.stringify(this.price) + JSON.stringify(this.REreleaseDate) + JSON.stringify(this.ownerId) + JSON.stringify(this.tenant) + JSON.stringify(this.gaddress))
}


Block.prototype.RentContractmonthly = function (tenantaddress, lessoraddress, valuedocumentId, lessorphone, tenantphone, endDate, pay, foryears, pentalyclause, tenantbankName, lessorbankName, tenantcolno, lessorcolno, lessorname, tenantname, releaseDate) {
    this.lessorphone = lessorphone
    this.tenantphone = tenantphone
    this.tenantaddress = tenantaddress
    this.lessoraddress = lessoraddress
    this.valuedocumentId = valuedocumentId
    this.releaseDate = releaseDate //new Date(Date.now())
    this.payDateday = new Date(releaseDate).getDate()
    this.endDate = endDate
    this.foryears = foryears / 12
    this.last = foryears
    this.pay = pay
    this.pentalyclause = pentalyclause
    this.tenantbankName = tenantbankName
    this.lessorbankName = lessorbankName
    this.tenantcolno = tenantcolno
    this.lessorcolno = lessorcolno
    this.tenantname = tenantname
    this.lessorname = lessorname
    this.documentId = sha256(JSON.stringify(this.tenantname) + JSON.stringify(this.lessorname) + JSON.stringify(this.tenantaddress) + JSON.stringify(this.lessoraddress) + JSON.stringify(this.lessorphone) + JSON.stringify(this.tenantphone) + JSON.stringify(this.valuedocumentId) + JSON.stringify(this.releaseDate) + JSON.stringify(this.payDate) + JSON.stringify(this.endDate) + JSON.stringify(this.foryears) + JSON.stringify(this.pay) + JSON.stringify(this.pentalyclause) + JSON.stringify(this.tenantbankName) + JSON.stringify(this.lessorbankName) + JSON.stringify(this.tenantcolno) + JSON.stringify(this.lessorcolno))

}


Block.prototype.SalePurchaseContract = function (sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, releaseDate, propretyId, sellercolno, buyercolno) {
    this.sellername = sellername
    this.buyername = buyername
    this.sellercoowner = sellercoowner
    this.buyercoowner = buyercoowner
    this.addressseller = addressseller
    this.addressbuyer = addressbuyer
    this.propretyId = propretyId
    this.releaseDate = new Date(releaseDate)
    this.purchaseValue = purchaseValue
    this.sellercolno = sellercolno
    this.buyercolno = buyercolno
    this.documentId = sha256(JSON.stringify(this.sellercolno) + JSON.stringify(this.buyercolno) + JSON.stringify(this.sellername) + JSON.stringify(this.buyername) + JSON.stringify(this.sellercoowner) + JSON.stringify(this.buyercoowner) + JSON.stringify(this.addressseller) + JSON.stringify(this.addressbuyer) + JSON.stringify(this.purchaseValue) + JSON.stringify(this.releaseDate) + JSON.stringify(this.propretyId))


}





Block.prototype.WorkContract = function (companyname, companyaddress, employername, employeraddress, employerposition, employercountry, workhours, workdays, monthsalary, endDate, pentalyclause) {
    this.releaseDate = new Date(Date.now())
    this.endDate = new Date(endDate)
    this.companyname = companyname
    this.companyaddress = companyaddress
    this.employername = employername
    this.employeraddress = employeraddress
    this.employerposition = employerposition
    this.employercountry = employercountry
    this.workhours = workhours
    this.workdays = workdays
    this.monthsalary = monthsalary
    this.pentalyclause = pentalyclause
    this.documentId = sha256(JSON.stringify(this.releaseDate) + JSON.stringify(this.endDate) + JSON.stringify(this.companyname) + JSON.stringify(this.companyaddress) + JSON.stringify(this.employername) + JSON.stringify(this.employeraddress) + JSON.stringify(this.employerposition) + JSON.stringify(this.employercountry) + JSON.stringify(this.workdays) + JSON.stringify(this.workhours) + JSON.stringify(this.workdays) + JSON.stringify(this.monthsalary) + JSON.stringify(this.pentalyclause))
}

Block.prototype.LoanContract = function (lenderId, lendername, lenderaddress, lenderbankname, borrowername, borroweraddress, borrowerbankname, borrowerId, amount, pay, endDate, benefit, guarantee) {
    this.releaseDate = new Date(Date.now())
    this.endDate = new Date(endDate)
    this.lenderId = lenderId
    this.lendername = lendername
    this.lenderaddress = lenderaddress
    this.lenderbankname = lenderbankname
    this.borrowerId = borrowerId
    this.borrowername = borrowername
    this.borroweraddress = borroweraddress
    this.borrowerbankname = borrowerbankname
    this.amount = amount
    this.pay = pay
    this.benefit = benefit
    this.guarantee = guarantee
    this.documentId = sha256(JSON.stringify(this.releaseDate) + JSON.stringify(this.endDate) + JSON.stringify(this.lenderId) + JSON.stringify(this.lendername) + JSON.stringify(this.lenderaddress) + JSON.stringify(this.lenderbankname) + JSON.stringify(this.borrowername) + JSON.stringify(this.brideaddress) + JSON.stringify(this.borrowerbankname) + JSON.stringify(this.borrowerId) + JSON.stringify(this.amount) + JSON.stringify(this.pay) + JSON.stringify(this.benefit) + JSON.stringify(this.guarantee))
}

















Block.prototype.CollegeDegree = function (releaseDate, studentId, faculty, degree) {
    this.releaseDate = new Date(releaseDate)
    this.studentId = studentId
    this.faculty = faculty
    this.degree = degree
    this.documentId = sha256(JSON.stringify(this.releaseDate) + JSON.stringify(this.studentId) + JSON.stringify(this.faculty) + JSON.stringify(this.degree))
}

Block.prototype.IntellectualProperty = function (ownerId, releaseDate, info) {
    this.ownerId = ownerId
    this.releaseDate = releaseDate
    this.info = info
    this.documentId = sha256(JSON.stringify(this.ownerId) + JSON.stringify(this.releaseDate) + JSON.stringify(this.info))
}

Block.prototype.BirthCertificate = function (birthDate, fatherName, motherName, placeofBirth, name, id) {
    this.birthDate = new Date(birthDate)
    this.fatherName = fatherName
    this.motherName = motherName
    this.placeofBirth = placeofBirth
    this.name = name
    this.id = id
    this.documentId = sha256(JSON.stringify(this.birthDate) + JSON.stringify(this.fatherName) + JSON.stringify(this.motherName) + + JSON.stringify(this.placeofBirth) + + JSON.stringify(this.name) + + JSON.stringify(this.id))
}

Block.prototype.DeathCertificate = function (deathDate, deathCause, placeofDeath, name, id) {
    this.deathDate = deathDate
    this.deathCause = deathCause
    this.placeofDeath = placeofDeath
    this.name = name
    this.id = id
    this.documentId = sha256(JSON.stringify(this.deathDate) + JSON.stringify(this.deathCause) + JSON.stringify(this.placeofDeath) + JSON.stringify(this.name) + JSON.stringify(this.id))
}

Block.prototype.VoteCard = function (voteId, id, name) {
    this.voteId = voteId
    this.id = id
    this.name = name
    this.documentId = sha256(JSON.stringify(this.voteId) + JSON.stringify(this.id) + JSON.stringify(this.name))
}

Block.prototype.Marriage = function (bridename, brideaddress, bridephone, bridemail, groomname, groomaddress, groomphone, groommail, dowry) {
    this.bridename = bridename
    this.brideaddress = brideaddress
    this.bridephone = bridephone
    this.bridemail = bridemail
    this.groomname = groomname
    this.groomaddress = groomaddress
    this.groomphone = groomphone
    this.groommail = groommail
    this.dowry = dowry
    this.documentId = sha256(JSON.stringify(this.bridename) + JSON.stringify(this.brideaddress) + JSON.stringify(this.bridephone) + JSON.stringify(this.bridemail) + JSON.stringify(this.groomname) + JSON.stringify(this.groomaddress) + JSON.stringify(this.groomphone) + JSON.stringify(this.groommail) + JSON.stringify(this.dowry))

}





function createNewGenesisRowBlockMoney(bankName, amount, id) {

    const block = new Block();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    const newmoney = new block.moneyAmount(bankName, amount, id)
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.money.push(newmoney)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))

}


function createNewGenesisRowBlocknationalId(fullName, address, gender, id, job, img) {
    const block = new Block();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    const newnId = new block.NationalId(fullName, address, gender, id, job, img)
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.nationalId.push(newnId);
    block.hash = sha256(JSON.stringify(block) + block.previousHash)

    blockChain.push(block)
    return (localStorage.setItem('blockChain', JSON.stringify(blockChain)))
}

function createNewGenesisRowBlockpassport(country, nationality, fullname, Address, Gender, documentId, Job) {
    const block = new Block();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    const newpassport = new block.Passport(country, nationality, fullname, Address, Gender, documentId, Job)
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now()
    block.passport.push(newpassport)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}

function createNewGenesisRowBlockdrivingLicense(fullName, address, DLdateEnd, DLeditingHistory, job, documentId) {
    const block = new Block();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    const newdLicense = new block.DrivingLicense(fullName, address, DLdateEnd, DLeditingHistory, job, documentId)
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now()
    block.drivingLicense.push(newdLicense)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}


function createNewGenesisRowBlockcarLicense(fullName, address, CLdateEnd, CLeditingHistory, job, chassisNo, motorNo, carType, img0, img1, img2, img3) {
    const block = new Block();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    const newcLicense = new block.CarLicense(fullName, address, CLdateEnd, CLeditingHistory, job, chassisNo, motorNo, carType, img0, img1, img2, img3)
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now()
    block.carLicense.push(newcLicense)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}


function createNewGenesisRowBlockrealestateLicense(img0, img1, img2, img3, propretysize, lotsize, rooms, garages, yearbuilt, availablefrom, bathrooms, structureType, address, REreleaseDate, ownerId, tenant, price, gaddress) {
    const block = new Block();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    const newrealestate = new block.RealestateLicense(img0, img1, img2, img3, propretysize, lotsize, rooms, garages, yearbuilt, availablefrom, bathrooms, structureType, address, REreleaseDate, ownerId, tenant, price, gaddress)
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now()
    block.realestateLicense.push(newrealestate)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}


function createNewGenesisRowBlocksalepurchaseContract(sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, releaseDate, propretyId) {
    const block = new Block();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    const newSPContract = new block.SalePurchaseContract(sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, releaseDate, propretyId)
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now()
    block.salePurchaseContract.push(newSPContract)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}




function createNewGenesisRowBlockcollegecertificate(releaseDate, studentId, faculty, degree) {
    const block = new Block();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    const newcollegeD = new block.CollegeDegree(releaseDate, studentId, faculty, degree)
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now()
    block.collegeCertificate.push(newcollegeD)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))

}


function createNewGenesisRowBlockintellectualproperty(ownerId, releaseDate, info) {
    const block = new Block();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    const newintprop = new block.IntellectualProperty(ownerId, releaseDate, info)
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now()
    block.intellectualProperty.push(newintprop)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}


function createNewGenesisRowBlockbirthCertificate(birthDate, fatherName, motherName, placeofBirth, name, id) {
    const block = new Block();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    const newbirthC = new block.BirthCertificate(birthDate, fatherName, motherName, placeofBirth, name, id)
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now()
    block.birthCertificate.push(newbirthC)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}
function createNewGenesisRowBlockdeathCertificate(deathDate, deathCause, placeofDeath, name, id) {
    const block = new Block();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    const newdeathC = new block.DeathCertificate(deathDate, deathCause, placeofDeath, name, id)
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now()
    block.deathCertificate.push(newdeathC)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))

}
function createNewGenesisRowBlockvoteCard(voteId, id, name) {
    const block = new Block();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    const voteC = new block.VoteCard(voteId, id, name)
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now()
    block.voteCard.push(voteC)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}





function createNewRowBlockmoney(bankName, amount, nationalId) {

    const block = new Block();
    const newmoney = new block.moneyAmount(bankName, amount, nationalId)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.money.push(newmoney)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}

function createNewRowBlocknationalId(fullName, address, gender, id, job, img) {
    const block = new Block();
    const newnId = new block.NationalId(fullName, address, gender, id, job, img)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.nationalId.push(newnId)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}

function createNewRowBlockpassport(country, nationality, fullname, Address, Gender, documentId, Job) {
    const block = new Block();
    const newpassport = new block.Passport(country, nationality, fullname, Address, Gender, documentId, Job)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.passport.push(newpassport)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}
function createNewRowBlockdrivingLicense(fullName, address, DLdateEnd, DLeditingHistory, job, documentId) {
    const block = new Block();
    const newdLicense = new block.DrivingLicense(fullName, address, DLdateEnd, DLeditingHistory, job, documentId)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.drivingLicense.push(newdLicense)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}

function createNewRowBlockcarLicense(fullName, address, CLdateEnd, CLeditingHistory, job, chassisNo, motorNo, carType, img0, img1, img2, img3) {
    const block = new Block();
    const newcLicense = new block.CarLicense(fullName, address, CLdateEnd, CLeditingHistory, job, chassisNo, motorNo, carType, img0, img1, img2, img3)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.carLicense.push(newcLicense)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}
function createNewRowBlockrealestateLicense(img0, img1, img2, img3, propretysize, lotsize, rooms, garages, yearbuilt, availablefrom, bathrooms, structureType, address, REreleaseDate, ownerId, tenant, price, gaddress) {
    const block = new Block();
    const newrealestate = new block.RealestateLicense(img0, img1, img2, img3, propretysize, lotsize, rooms, garages, yearbuilt, availablefrom, bathrooms, structureType, address, REreleaseDate, ownerId, tenant, price, gaddress)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.realestateLicense.push(newrealestate)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}


function createNewRowBlocksalepurchaseContract(sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, releaseDate, propretyId) {
    const block = new Block();
    const newSPContract = new block.SalePurchaseContract(sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, releaseDate, propretyId)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.salePurchaseContract.push(newSPContract)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}


function createNewRowBlockrentContract() {
    const block = new Block();
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}
function createNewRowBlockworkContract() {
    const block = new Block();
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}
function createNewRowBlockloanContract() {
    const block = new Block();
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}
function createNewRowBlockmarriageContract() {
    const block = new Block();
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}

function createNewRowBlockcollegecertificate(releaseDate, studentId, faculty, degree) {
    const block = new Block();
    const newcollegeD = new block.CollegeDegree(releaseDate, studentId, faculty, degree)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.collegeCertificate.push(newcollegeD)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}
function createNewRowBlockintellectualproperty(ownerId, releaseDate, info) {
    const block = new Block();
    const newintprop = new block.IntellectualProperty(ownerId, releaseDate, info)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.intellectualProperty.push(newintprop)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}
function createNewRowBlockbirthCertificate(birthDate, fatherName, motherName, placeofBirth, name, id) {
    const block = new Block();
    const newbirthC = new block.BirthCertificate(birthDate, fatherName, motherName, placeofBirth, name, id)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.birthCertificate.push(newbirthC)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}

function createNewRowBlockdeathCertificate(deathDate, deathCause, placeofDeath, name, id) {
    const block = new Block();
    const newdeathC = new block.DeathCertificate(deathDate, deathCause, placeofDeath, name, id)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.deathCertificate.push(newdeathC)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}

function createNewRowBlockvoteCard(voteId, id, name) {
    const block = new Block();
    const voteC = new block.VoteCard(voteId, id, name)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    block.voteCard.push(voteC)
    block.hash = sha256(JSON.stringify(block) + block.previousHash)
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}




function getLastCoBlock(colno) {
    const block = blockChain[colno - 1]
    const colchain = block.columnChain
    if (block.columnChain === undefined) {
        return ('block chain is null')
    } else {
        const colChain = block.columnChain;
        return colChain[colChain.length - 1]
    }

}






function createNewColBlockmoney(colno, bankName, amount, nationalId, img) {


    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        let newMoneyData = new colblock.moneyAmount(bankName, amount, nationalId, img)
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.money.push(newMoneyData)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        let newMoneyData = new colblock.moneyAmount(bankName, amount, nationalId, img)
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.money.push(newMoneyData)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)

        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }


}
function createNewColBlocknationalId(colno, fullName, address, gender, id, job, img) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const newnId = new colblock.NationalId(fullName, address, gender, id, job, img)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.nationalId.push(newnId)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        const newnId = new colblock.NationalId(fullName, address, gender, id, job, img)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.nationalId = colB.nationalId

        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.nationalId.push(newnId)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}
function createNewColBlockpassport(colno, country, nationality, fullname, Gender, Job) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const newpassport = new colblock.Passport(country, nationality, fullname, Gender, Job)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.passport.push(newpassport)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))


    } else {
        var colblock = new Block();
        const newpassport = new colblock.Passport(country, nationality, fullname, Gender, Job)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.passport.push(newpassport)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}

function createNewColBlockdrivingLicense(colno, fullName, address, DLdateEnd, DLeditingHistory, job, documentId, img) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const newdLicense = new colblock.DrivingLicense(fullName, address, DLdateEnd, DLeditingHistory, job, documentId, img)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.drivingLicense.push(newdLicense)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))


    } else {
        var colblock = new Block();
        const newdLicense = new colblock.DrivingLicense(fullName, address, DLdateEnd, DLeditingHistory, job, documentId, img)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.drivingLicense.push(newdLicense)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}
function createNewColBlockcarLicense(colno, fullName, address, CLdateEnd, CLeditingHistory, job, chassisNo, motorNo, carType, img0, img1, img2, img3) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const newcLicense = new colblock.CarLicense(fullName, address, CLdateEnd, CLeditingHistory, job, chassisNo, motorNo, carType, img0, img1, img2, img3)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.carLicense.push(newcLicense)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))


    } else {
        var colblock = new Block();
        const newcLicense = new colblock.CarLicense(fullName, address, CLdateEnd, CLeditingHistory, job, chassisNo, motorNo, carType, img0, img1, img2, img3)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.carLicense.push(newcLicense)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}
function createNewColBlockrealestateLicense(colno, img0, img1, img2, img3, propretysize, lotsize, rooms, garages, yearbuilt, availablefrom, bathrooms, structureType, address, REreleaseDate, ownerId, tenant, price, gaddress) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const newrealestate = new colblock.RealestateLicense(img0, img1, img2, img3, propretysize, lotsize, rooms, garages, yearbuilt, availablefrom, bathrooms, structureType, address, REreleaseDate, ownerId, tenant, price, gaddress)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.realestateLicense.push(newrealestate)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))


    } else {
        var colblock = new Block();
        const newrealestate = new colblock.RealestateLicense(img0, img1, img2, img3, propretysize, lotsize, rooms, garages, yearbuilt, availablefrom, bathrooms, structureType, address, REreleaseDate, ownerId, tenant, price, gaddress)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.realestateLicense.push(newrealestate)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}

function createNewColBlocksalepurchaseContract(colno, sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, releaseDate, propretyId, sellercolno, buyercolno) {
    if (blockChain[colno - 1].columnChain.length < 1) {

        var colblock = new Block();
        const newSPContract = new colblock.SalePurchaseContract(sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, releaseDate, propretyId, sellercolno, buyercolno)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.salePurchaseContract.push(newSPContract)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        const newSPContract = new colblock.SalePurchaseContract(sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, releaseDate, propretyId, sellercolno, buyercolno)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.salePurchaseContract.push(newSPContract)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}
function createNewColBlockrentContractmonthly(colno, tenantaddress, lessoraddress, valuedocumentId, lessorphone, tenantphone, endDate, pay, foryears, pentalyclause, tenantbankName, lessorbankName, tenantcolno, lessorcolno, lessorname, tenantname, releaseDate) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const rentmonthly = new colblock.RentContractmonthly(tenantaddress, lessoraddress, valuedocumentId, lessorphone, tenantphone, endDate, pay, foryears, pentalyclause, tenantbankName, lessorbankName, tenantcolno, lessorcolno, lessorname, tenantname, releaseDate)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.rentContract.push(rentmonthly)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        const rentmonthly = new colblock.RentContractmonthly(tenantaddress, lessoraddress, valuedocumentId, lessorphone, tenantphone, endDate, pay, foryears, pentalyclause, tenantbankName, lessorbankName, tenantcolno, lessorcolno, lessorname, tenantname, releaseDate)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.rentContract.push(rentmonthly)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}
function createNewColBlockworkContract(colno, companyname, companyaddress, employername, employeraddress, employerposition, employercountry, workhours, workdays, monthsalary, endDate, pentalyclause) {
    if (blockChain[colno - 1].columnChain.length < 1) {

        var colblock = new Block();
        const workcontract = new colblock.WorkContractt(companyname, companyaddress, employername, employeraddress, employerposition, employercountry, workhours, workdays, monthsalary, endDate, pentalyclause)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.workContract.push(workcontract)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        const workcontract = new colblock.WorkContract(companyname, companyaddress, employername, employeraddress, employerposition, employercountry, workhours, workdays, monthsalary, endDate, pentalyclause)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.workContract.push(workcontract)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}
function createNewColBlockloanContract(colno, lenderId, lendername, lenderaddress, lenderbankname, borrowername, borroweraddress, borrowerbankname, borrowerId, amount, pay, endDate, benefit, guarantee) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        let loan = new colblock.LoanContract(lenderId, lendername, lenderaddress, lenderbankname, borrowername, borroweraddress, borrowerbankname, borrowerId, amount, pay, endDate, benefit, guarantee)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.loanContract.push(loan)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        let loan = new colblock.LoanContract(lenderId, lendername, lenderaddress, lenderbankname, borrowername, borroweraddress, borrowerbankname, borrowerId, amount, pay, endDate, benefit, guarantee)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.loanContract.push(loan)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}
function createNewColBlockmarriageContract(colno, bridename, brideaddress, bridephone, bridemail, groomname, groomaddress, groomphone, groommail, dowry) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        let marriageContract = new colblock.Marriage(bridename, brideaddress, bridephone, bridemail, groomname, groomaddress, groomphone, groommail, dowry)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.marriageContract.push(marriageContract)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        let marriageContract = new colblock.Marriage(bridename, brideaddress, bridephone, bridemail, groomname, groomaddress, groomphone, groommail, dowry)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.marriageContract.push(marriageContract)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}









function createNewColBlockcollegecertificate(colno, releaseDate, studentId, faculty, degree) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const newcollegeD = new colblock.CollegeDegree(releaseDate, studentId, faculty, degree)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.collegeCertificate.push(newcollegeD)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        const newcollegeD = new colblock.CollegeDegree(releaseDate, studentId, faculty, degree)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.collegeCertificate.push(newcollegeD)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}
function createNewColBlockintellectualproperty(colno, ownerId, releaseDate, info) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const newintprop = new colblock.IntellectualProperty(ownerId, releaseDate, info)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.intellectualProperty.push(newintprop)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))


    } else {
        var colblock = new Block();
        const newintprop = new colblock.IntellectualProperty(ownerId, releaseDate, info)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.intellectualProperty.push(newintprop)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}
function createNewColBlockbirthCertificate(colno, birthDate, fatherName, motherName, placeofBirth, name, id) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const newbirthC = new colblock.BirthCertificate(birthDate, fatherName, motherName, placeofBirth, name, id)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.birthCertificate.push(newbirthC)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))
    } else {
        var colblock = new Block();
        const newbirthC = new colblock.BirthCertificate(birthDate, fatherName, motherName, placeofBirth, name, id)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.birthCertificate.push(newbirthC)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}
function createNewColBlockdeathCertificate(colno, deathDate, deathCause, placeofDeath, name, id) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const newdeathC = new colblock.DeathCertificate(deathDate, deathCause, placeofDeath, name, id)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.block.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.deathCertificate.push(newdeathC)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        const newdeathC = new colblock.DeathCertificate(deathDate, deathCause, placeofDeath, name, id)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.block.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.deathCertificate.push(newdeathC)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}
function createNewColBlockvoteCard(colno, voteId, id, name) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const voteC = new colblock.VoteCard(voteId, id, name)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.voteCard.push(voteC)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        const voteC = new colblock.VoteCard(voteId, id, name)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.voteCard.push(voteC)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}




function createNewColBlockTransaction(colno, senderid, recepientid, senderbankname, recepientbankname, value) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        const trans = new colblock.Transactions(senderid, recepientid, senderbankname, recepientbankname, value)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.transactions.push(trans)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        const trans = new colblock.Transactions(senderid, recepientid, senderbankname, recepientbankname, value)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.money.push(...colB.money)
        colblock.nationalId.push(...colB.nationalId)
        colblock.transactions.push(...colB.transactions)
        colblock.passport.push(...colB.passport)
        colblock.realestateLicense.push(...colB.realestateLicense)
        colblock.salePurchaseContract.push(...colB.salePurchaseContract)
        colblock.rentContract.push(...colB.rentContract)
        colblock.workContract.push(...colB.workContract)
        colblock.marriageContract.push(...colB.marriageContract)
        colblock.loanContract.push(...colB.loanContract)
        colblock.drivingLicense.push(...colB.drivingLicense)
        colblock.carLicense.push(...colB.carLicense)
        colblock.healthCertificate.push(...colB.healthCertificate)
        colblock.collegeCertificate.push(...colB.collegeCertificate)
        colblock.birthCertificate.push(...colB.birthCertificate)
        colblock.deathCertificate.push(...colB.deathCertificate)
        colblock.voteCard.push(...colB.voteCard)
        colblock.intellectualProperty.push(...colB.intellectualProperty)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        colblock.transactions.push(trans)
        colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}


function dataTypesIsValid(blockChain) {
    let valid = true
    blockChain.forEach(rowblock => {
        const colchain = rowblock.columnChain
        colchain.forEach(colblock => {
            let money = colblock.money
            let nationalId = colblock.nationalId
            let transactions = colblock.transactions
            let passport = colblock.passport
            let realestateLicense = colblock.realestateLicense
            let salePurchaseContract = colblock.salePurchaseContract
            let rentContract = colblock.rentContract
            let workContract = colblock.workContract
            let marriageContract = colblock.marriageContract
            let loanContract = colblock.loanContract
            let drivingLicense = colblock.drivingLicense
            let carLicense = colblock.carLicense
            let healthCertificate = colblock.healthCertificate
            let collegeCertificate = colblock.collegeCertificate
            let birthCertificate = colblock.birthCertificate
            let deathCertificate = colblock.deathCertificate
            let voteCard = colblock.voteCard
            if (money.length > 0) {
                money.forEach(moneyelement => {
                    let actualId = moneyelement.documentId
                    let testId = sha256(JSON.stringify(moneyelement.bankName) + JSON.stringify(moneyelement.amount) + JSON.stringify(moneyelement.id) + JSON.stringify(moneyelement.img))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }
                })
            } else if (nationalId.length > 0) {
                nationalId.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.fullName) + JSON.stringify(element.address) + JSON.stringify(element.gender) + JSON.stringify(element.id) + JSON.stringify(element.job) + JSON.stringify(element.img))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }
                })
            } else if (transactions.length > 0) {
                transactions.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.senderId) + JSON.stringify(element.recepientId) + JSON.stringify(element.amount) + JSON.stringify(element.senderbankname) + JSON.stringify(element.recepientbankname))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }

                })
            } else if (passport.length > 0) {
                passport.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.country) + JSON.stringify(element.nationality) + JSON.stringify(element.fullname) + JSON.stringify(element.gender) + JSON.stringify(element.job))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }

                })
            } else if (realestateLicense.length > 0) {
                realestateLicense.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.img0) + JSON.stringify(element.img1) + JSON.stringify(element.img2) + JSON.stringify(element.img3) + JSON.stringify(element.propretysize) + JSON.stringify(element.lotsize) + JSON.stringify(element.rooms) + JSON.stringify(element.garages) + JSON.stringify(element.yearbuilt) + JSON.stringify(element.availablefrom) + JSON.stringify(element.bathrooms) + JSON.stringify(element.structureType) + JSON.stringify(telement.address) + JSON.stringify(element.price) + JSON.stringify(element.REreleaseDate) + JSON.stringify(element.ownerId) + JSON.stringify(element.tenant) + JSON.stringify(element.gaddress))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }


                })
            } else if (salePurchaseContract.length > 0) {
                salePurchaseContract.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.sellercolno) + JSON.stringify(element.buyercolno) + JSON.stringify(element.sellername) + JSON.stringify(telement.buyername) + JSON.stringify(element.sellercoowner) + JSON.stringify(element.buyercoowner) + JSON.stringify(element.addressseller) + JSON.stringify(element.addressbuyer) + JSON.stringify(element.purchaseValue) + JSON.stringify(element.releaseDate) + JSON.stringify(element.propretyId))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }

                })
            } else if (rentContract.length > 0) {
                rentContract.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.tenantname) + JSON.stringify(element.lessorname) + JSON.stringify(element.tenantaddress) + JSON.stringify(element.lessoraddress) + JSON.stringify(element.lessorphone) + JSON.stringify(element.tenantphone) + JSON.stringify(element.valuedocumentId) + JSON.stringify(element.releaseDate) + JSON.stringify(element.payDate) + JSON.stringify(element.endDate) + JSON.stringify(element.foryears) + JSON.stringify(element.pay) + JSON.stringify(element.pentalyclause) + JSON.stringify(element.tenantbankName) + JSON.stringify(element.lessorbankName) + JSON.stringify(element.tenantcolno) + JSON.stringify(element.lessorcolno))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }

                })
            } else if (workContract.length > 0) {

                workContract.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.releaseDate) + JSON.stringify(element.endDate) + JSON.stringify(element.companyname) + JSON.stringify(element.companyaddress) + JSON.stringify(element.employername) + JSON.stringify(element.employeraddress) + JSON.stringify(telement.employerposition) + JSON.stringify(element.employercountry) + JSON.stringify(element.workdays) + JSON.stringify(element.workhours) + JSON.stringify(element.workdays) + JSON.stringify(element.monthsalary) + JSON.stringify(element.pentalyclause))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }
                })
            } else if (marriageContract.length > 0) {
                marriageContract.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.bridename) + JSON.stringify(element.brideaddress) + JSON.stringify(element.bridephone) + JSON.stringify(element.bridemail) + JSON.stringify(element.groomname) + JSON.stringify(element.groomaddress) + JSON.stringify(element.groomphone) + JSON.stringify(element.groommail) + JSON.stringify(element.dowry))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }
                })
            } else if (loanContract.length > 0) {
                loanContract.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.releaseDate) + JSON.stringify(element.endDate) + JSON.stringify(element.lenderId) + JSON.stringify(element.lendername) + JSON.stringify(element.lenderaddress) + JSON.stringify(element.lenderbankname) + JSON.stringify(element.borrowername) + JSON.stringify(element.brideaddress) + JSON.stringify(element.borrowerbankname) + JSON.stringify(element.borrowerId) + JSON.stringify(element.amount) + JSON.stringify(element.pay) + JSON.stringify(element.benefit) + JSON.stringify(element.guarantee))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }
                })

            } else if (drivingLicense.length > 0) {
                drivingLicense.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.fullName) + JSON.stringify(element.address) + JSON.stringify(element.dateEnd) + JSON.stringify(element.editingHistory) + JSON.stringify(element.job) + JSON.stringify(element.documentId) + JSON.stringify(element.img))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }
                })
            } else if (carLicense > 0) {
                carLicense.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.fullName) + JSON.stringify(element.address) + JSON.stringify(element.dateEnd) + JSON.stringify(element.editingHistory) + JSON.stringify(element.job) + JSON.stringify(element.chassisNo) + JSON.stringify(element.motorNo) + JSON.stringify(element.carType) + JSON.stringify(element.img0) + JSON.stringify(element.img1) + JSON.stringify(element.img2) + JSON.stringify(element.img3));
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }
                })
            } else if (healthCertificate > 0) {
                healthCertificate.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.releaseDate) + JSON.stringify(element.citizenId) + JSON.stringify(element.healthState))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }
                })
            } else if (collegeCertificate.length > 0) {
                collegeCertificate.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.releaseDate) + JSON.stringify(element.studentId) + JSON.stringify(element.faculty) + JSON.stringify(element.degree))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }

                })
            } else if (birthCertificate.length > 0) {
                birthCertificate.forEach(element => {
                    let actualId = element.documentId
                    let testId = sha256(JSON.stringify(element.birthDate) + JSON.stringify(element.fatherName) + JSON.stringify(element.motherName) + + JSON.stringify(element.placeofBirth) + + JSON.stringify(element.name) + + JSON.stringify(element.id))
                    if (actualId = testId) {
                        return (valid = true)
                    } else {
                        return (valid = false)
                    }

                })
            }
        })
        let money = rowblock.money
        let nationalId = rowblock.nationalId
        let transactions = rowblock.transactions
        let passport = rowblock.passport
        let realestateLicense = rowblock.realestateLicense
        let salePurchaseContract = rowblock.salePurchaseContract
        let rentContract = rowblock.rentContract
        let workContract = rowblock.workContract
        let marriageContract = rowblock.marriageContract
        let loanContract = rowblock.loanContract
        let drivingLicense = rowblock.drivingLicense
        let carLicense = rowblock.carLicense
        let healthCertificate = rowblock.healthCertificate
        let collegeCertificate = rowblock.collegeCertificate
        let birthCertificate = rowblock.birthCertificate
        if (money.length > 0) {
            money.forEach(moneyelement => {
                let actualId = moneyelement.documentId
                let testId = sha256(JSON.stringify(moneyelement.bankName) + JSON.stringify(moneyelement.amount) + JSON.stringify(moneyelement.id) + JSON.stringify(moneyelement.img))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }
            })
        } else if (nationalId.length > 0) {
            nationalId.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.fullName) + JSON.stringify(element.address) + JSON.stringify(element.gender) + JSON.stringify(element.id) + JSON.stringify(element.job) + JSON.stringify(element.img))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }
            })
        } else if (transactions.length > 0) {
            transactions.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.senderId) + JSON.stringify(element.recepientId) + JSON.stringify(element.amount) + JSON.stringify(element.senderbankname) + JSON.stringify(element.recepientbankname))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }

            })
        } else if (passport.length > 0) {
            passport.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.country) + JSON.stringify(element.nationality) + JSON.stringify(element.fullname) + JSON.stringify(element.gender) + JSON.stringify(element.job))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }

            })
        } else if (realestateLicense.length > 0) {
            realestateLicense.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.img0) + JSON.stringify(element.img1) + JSON.stringify(element.img2) + JSON.stringify(element.img3) + JSON.stringify(element.propretysize) + JSON.stringify(element.lotsize) + JSON.stringify(element.rooms) + JSON.stringify(element.garages) + JSON.stringify(element.yearbuilt) + JSON.stringify(element.availablefrom) + JSON.stringify(element.bathrooms) + JSON.stringify(element.structureType) + JSON.stringify(telement.address) + JSON.stringify(element.price) + JSON.stringify(element.REreleaseDate) + JSON.stringify(element.ownerId) + JSON.stringify(element.tenant) + JSON.stringify(element.gaddress))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }


            })
        } else if (salePurchaseContract.length > 0) {
            salePurchaseContract.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.sellercolno) + JSON.stringify(element.buyercolno) + JSON.stringify(element.sellername) + JSON.stringify(telement.buyername) + JSON.stringify(element.sellercoowner) + JSON.stringify(element.buyercoowner) + JSON.stringify(element.addressseller) + JSON.stringify(element.addressbuyer) + JSON.stringify(element.purchaseValue) + JSON.stringify(element.releaseDate) + JSON.stringify(element.propretyId))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }

            })
        } else if (rentContract.length > 0) {
            rentContract.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.tenantname) + JSON.stringify(element.lessorname) + JSON.stringify(element.tenantaddress) + JSON.stringify(element.lessoraddress) + JSON.stringify(element.lessorphone) + JSON.stringify(element.tenantphone) + JSON.stringify(element.valuedocumentId) + JSON.stringify(element.releaseDate) + JSON.stringify(element.payDate) + JSON.stringify(element.endDate) + JSON.stringify(element.foryears) + JSON.stringify(element.pay) + JSON.stringify(element.pentalyclause) + JSON.stringify(element.tenantbankName) + JSON.stringify(element.lessorbankName) + JSON.stringify(element.tenantcolno) + JSON.stringify(element.lessorcolno))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }

            })
        } else if (workContract.length > 0) {

            workContract.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.releaseDate) + JSON.stringify(element.endDate) + JSON.stringify(element.companyname) + JSON.stringify(element.companyaddress) + JSON.stringify(element.employername) + JSON.stringify(element.employeraddress) + JSON.stringify(telement.employerposition) + JSON.stringify(element.employercountry) + JSON.stringify(element.workdays) + JSON.stringify(element.workhours) + JSON.stringify(element.workdays) + JSON.stringify(element.monthsalary) + JSON.stringify(element.pentalyclause))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }
            })
        } else if (marriageContract.length > 0) {
            marriageContract.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.bridename) + JSON.stringify(element.brideaddress) + JSON.stringify(element.bridephone) + JSON.stringify(element.bridemail) + JSON.stringify(element.groomname) + JSON.stringify(element.groomaddress) + JSON.stringify(element.groomphone) + JSON.stringify(element.groommail) + JSON.stringify(element.dowry))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }
            })
        } else if (loanContract.length > 0) {
            loanContract.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.releaseDate) + JSON.stringify(element.endDate) + JSON.stringify(element.lenderId) + JSON.stringify(element.lendername) + JSON.stringify(element.lenderaddress) + JSON.stringify(element.lenderbankname) + JSON.stringify(element.borrowername) + JSON.stringify(element.brideaddress) + JSON.stringify(element.borrowerbankname) + JSON.stringify(element.borrowerId) + JSON.stringify(element.amount) + JSON.stringify(element.pay) + JSON.stringify(element.benefit) + JSON.stringify(element.guarantee))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }
            })

        } else if (drivingLicense.length > 0) {
            drivingLicense.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.fullName) + JSON.stringify(element.address) + JSON.stringify(element.dateEnd) + JSON.stringify(element.editingHistory) + JSON.stringify(element.job) + JSON.stringify(element.documentId) + JSON.stringify(element.img))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }
            })
        } else if (carLicense > 0) {
            carLicense.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.fullName) + JSON.stringify(element.address) + JSON.stringify(element.dateEnd) + JSON.stringify(element.editingHistory) + JSON.stringify(element.job) + JSON.stringify(element.chassisNo) + JSON.stringify(element.motorNo) + JSON.stringify(element.carType) + JSON.stringify(element.img0) + JSON.stringify(element.img1) + JSON.stringify(element.img2) + JSON.stringify(element.img3));
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }
            })
        } else if (healthCertificate > 0) {
            healthCertificate.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.releaseDate) + JSON.stringify(element.citizenId) + JSON.stringify(element.healthState))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }
            })
        } else if (collegeCertificate.length > 0) {
            collegeCertificate.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.releaseDate) + JSON.stringify(element.studentId) + JSON.stringify(element.faculty) + JSON.stringify(element.degree))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }

            })
        } else if (birthCertificate.length > 0) {
            birthCertificate.forEach(element => {
                let actualId = element.documentId
                let testId = sha256(JSON.stringify(element.birthDate) + JSON.stringify(element.fatherName) + JSON.stringify(element.motherName) + + JSON.stringify(element.placeofBirth) + + JSON.stringify(element.name) + + JSON.stringify(element.id))
                if (actualId = testId) {
                    return (valid = true)
                } else {
                    return (valid = false)
                }

            })
        }


    })
    if (valid == true) {
        return (true)
    } else { return (false) }
}




function blockDataIsValid(blockChain) {
    let validRowData = true
    let validColData = true
    blockChain.forEach(block => {

        const colchain = block.columnChain
        colchain.forEach(colblock => {
            let index = colchain.indexOf(colblock)
            if (index = 0) {
                let testhash = sha256(JSON.stringify(colblock) + block.hash)
                let actualhash = colblock.hash
                if (testhash = actualhash) {
                    return validColData = true
                } else { return validColData = false }
            } else {

                let testHash = sha256(JSON.stringify(colblock) + colblock.downHash)
                let actualHash = colblock.hash
                if (testHash = actualHash) {
                    return validColData = true
                } else { return validColData = false }
            }

        })



        let index = blockChain.indexOf(block)
        if (index = 0) {
            let testhash = sha256(JSON.stringify(block) + block.previousHash)
            let actualhash = block.hash
            if (testhash = actualhash) {
                return validRowData = true
            } else { return validRowData = false }
        } else {
            let previousblock = blockChain[block.colNo - 1]
            let testHash = sha256(JSON.stringify(block) + previousblock.hash)
            let actualHash = block.hash
            if (testHash = actualHash) {
                return validRowData = true
            } else { return validRowData = false }

        }




    });

    if (validColData === true && validRowData === true) {
        return true
    } else {
        return false
    }



}





function blockChainIsValid(blockChain) {
    const blockDataIsvalid = blockDataIsValid(blockChain)
    const dataTypesisValid = dataTypesIsValid(blockChain)
    let validRowChain = true
    let validColChain = true
    if (blockDataIsvalid === true && dataTypesisValid === true) {

        blockChain.forEach(rowblock => {
            const colchain = rowblock.columnChain
            colchain.forEach(colblock => {
                if (colchain.indexOf(colblock) !== 0) {
                    const downblock = colchain[colchain.indexOf(colblock) - 1]
                    if (colblock.downHash === downblock.hash) {
                        return validColChain
                    } else { return validColChain = false }
                } else {
                    if (colblock.downHash === rowblock.hash) {
                        return validColChain
                    } else { return validColChain = false }
                }


            })
            const previousblock = blockChain[blockChain.indexOf(rowblock) - 1]

            if (blockChain.indexOf(rowblock) !== 0) {
                if (rowblock.previousHash === previousblock.hash) {
                    return validRowChain
                } else { return validRowChain = false }
            }



        });

    } else {
        return false
    }

    if (validRowChain === true && validColChain === true) {
        return true
    } else {
        return false
    }


}

function colblockforMoneytrans(colno, bankName, amount, nationalId, img) {
    let colblock = new Block()
    let colChain = blockChain[colno - 1].columnChain
    let colB = colChain[colChain.length - 1]
    let newMoneyData = new colblock.moneyAmount(bankName, amount, nationalId, img)
    let moneyarray = colB.money
    let same = moneyarray.filter(element => bankName = element.bankName)
    let samelength = same.length
    colblock.money.push(...colB.money)
    colblock.nationalId.push(...colB.nationalId)
    colblock.transactions.push(...colB.transactions)
    colblock.passport.push(...colB.passport)
    colblock.realestateLicense.push(...colB.realestateLicense)
    colblock.salePurchaseContract.push(...colB.salePurchaseContract)
    colblock.rentContract.push(...colB.rentContract)
    colblock.workContract.push(...colB.workContract)
    colblock.marriageContract.push(...colB.marriageContract)
    colblock.loanContract.push(...colB.loanContract)
    colblock.drivingLicense.push(...colB.drivingLicense)
    colblock.carLicense.push(...colB.carLicense)
    colblock.healthCertificate.push(...colB.healthCertificate)
    colblock.collegeCertificate.push(...colB.collegeCertificate)
    colblock.birthCertificate.push(...colB.birthCertificate)
    colblock.deathCertificate.push(...colB.deathCertificate)
    colblock.voteCard.push(...colB.voteCard)
    colblock.intellectualProperty.push(...colB.intellectualProperty)
    colblock.downHash = colB.hash
    colblock.index = colB.index + 1
    colblock.colNo = colB.colNo
    colblock.timeStamp = Date.now();
    colblock.previousHash = '000000000000000000000000000000000'
    colblock.money.push(newMoneyData)
    colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
    colChain.push(colblock)
    if (samelength > 0) {
        let sameindex = colblock.money.indexOf(...same)
        return colblock.money.splice(sameindex, 1)

    }
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))

}






function colblockforcartrans(colno, senderindex) {
    let colblock = new Block()
    let colChain = blockChain[colno - 1].columnChain
    let colB = colChain[colChain.length - 1]
    colblock.money.push(...colB.money)
    colblock.nationalId.push(...colB.nationalId)
    colblock.transactions.push(...colB.transactions)
    colblock.passport.push(...colB.passport)
    colblock.realestateLicense.push(...colB.realestateLicense)
    colblock.salePurchaseContract.push(...colB.salePurchaseContract)
    colblock.rentContract.push(...colB.rentContract)
    colblock.workContract.push(...colB.workContract)
    colblock.marriageContract.push(...colB.marriageContract)
    colblock.loanContract.push(...colB.loanContract)
    colblock.drivingLicense.push(...colB.drivingLicense)
    colblock.healthCertificate.push(...colB.healthCertificate)
    colblock.collegeCertificate.push(...colB.collegeCertificate)
    colblock.birthCertificate.push(...colB.birthCertificate)
    colblock.deathCertificate.push(...colB.deathCertificate)
    colblock.voteCard.push(...colB.voteCard)
    colblock.intellectualProperty.push(...colB.intellectualProperty)
    colblock.carLicense.push(...colB.carLicense)
    colblock.carLicense.splice(senderindex, 1)
    colblock.downHash = colB.hash
    colblock.index = colB.index + 1
    colblock.colNo = colB.colNo
    colblock.timeStamp = Date.now();
    colblock.previousHash = '000000000000000000000000000000000'
    colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
    colChain.push(colblock)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))


}


function colblockfortransrealestate(colno, senderindex) {
    let colblock = new Block()
    let colChain = blockChain[colno - 1].columnChain
    let colB = colChain[colChain.length - 1]
    colblock.money.push(...colB.money)
    colblock.nationalId.push(...colB.nationalId)
    colblock.transactions.push(...colB.transactions)
    colblock.passport.push(...colB.passport)
    colblock.salePurchaseContract.push(...colB.salePurchaseContract)
    colblock.rentContract.push(...colB.rentContract)
    colblock.workContract.push(...colB.workContract)
    colblock.marriageContract.push(...colB.marriageContract)
    colblock.loanContract.push(...colB.loanContract)
    colblock.drivingLicense.push(...colB.drivingLicense)
    colblock.carLicense.push(...colB.carLicense)
    colblock.healthCertificate.push(...colB.healthCertificate)
    colblock.collegeCertificate.push(...colB.collegeCertificate)
    colblock.birthCertificate.push(...colB.birthCertificate)
    colblock.deathCertificate.push(...colB.deathCertificate)
    colblock.voteCard.push(...colB.voteCard)
    colblock.intellectualProperty.push(...colB.intellectualProperty)
    colblock.realestateLicense.push(...colB.realestateLicense)
    colblock.realestateLicense.splice(senderindex, 1)
    colblock.downHash = colB.hash
    colblock.index = colB.index + 1
    colblock.colNo = colB.colNo
    colblock.timeStamp = Date.now();
    colblock.previousHash = '000000000000000000000000000000000'
    colblock.hash = sha256(JSON.stringify(colblock) + colblock.downHash)
    colChain.push(colblock)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))


}

function encryptpublic(colno) {
    localStorage.removeItem('encryptedblockChain')
    let encrypt = []
    localStorage.setItem('encryptedblockChain', JSON.stringify(encrypt))
    let encryptedblockChain = JSON.parse(localStorage.getItem('encryptedblockChain'))

    let block = getLastCoBlock(colno)

    let public = fs.readFileSync("./keys/public.pem", "utf8")
    let keypublic = new rsa(public)

    var encrypte = keypublic.encrypt(block, 'base64')
    encryptedblockChain.push(encrypte)
    return (localStorage.setItem('encryptedblockChain', JSON.stringify(encryptedblockChain)))




}



function transMoney(senderId, recepientId, sendercolno, recepientcolno, amount, senderbankName, recepientbankName, privateKey) {

    const blockChainIsvalid = blockChainIsValid(blockChain)
    if (blockChainIsvalid === true) {
        let encryptedblockchain = JSON.parse(localStorage.getItem('encryptedblockChain'))
        let columnChain = blockChain[sendercolno - 1]


        let private = fs.readFileSync("./keys/private.pem", "utf8")

        let lastcolsenderblock = getLastCoBlock(sendercolno)
        let lastcolrecepientblock = getLastCoBlock(recepientcolno)
        let scolno = lastcolsenderblock.colNo
        let rcolno = lastcolrecepientblock.colNo
        let sendermoney = lastcolsenderblock.money
        let senderbankname = sendermoney       //.filter(element => element.bankName = senderbankName)
        let senderamount = senderbankname[0].amount
        let sendernationalId = senderbankname[0].id
        let recepientmoney = lastcolrecepientblock.money
        let recepientbankname = recepientmoney.filter(element => element.bankName = recepientbankName)
        let recepientamount = recepientbankname[0].amount
        let recepientnationalId = recepientbankname[0].id
        let newSenderAmount = senderamount - amount
        let newrecepientAmount = recepientamount + amount
        let simg = senderbankname[0].img
        let rimg = recepientbankname[0].img
        encryptpublic(sendercolno)
        let encryptedcolchain = encryptedblockchain[0]

        let keyprivate = new rsa(private)
        let decryptedblockchain = keyprivate.decrypt(encryptedcolchain, 'utf8')
        let decrypthash = sha256(JSON.stringify(decryptedblockchain))
        let columnhash = sha256(JSON.stringify(lastcolsenderblock))



        if (decrypthash = columnhash && senderId == sendernationalId && recepientId == recepientnationalId && senderamount >= amount && recepientcolno == rcolno && sendercolno == scolno) {
            return (colblockforMoneytrans(sendercolno, senderbankName, newSenderAmount, sendernationalId, simg),
                colblockforMoneytrans(recepientcolno, recepientbankName, newrecepientAmount, recepientnationalId, rimg)
                , createNewColBlockTransaction(sendercolno, sendernationalId, recepientnationalId, senderbankName, recepientbankName, amount)
                , createNewColBlockTransaction(recepientcolno, sendernationalId, recepientnationalId, senderbankName, recepientbankName, amount))


        } else { return "Review your information" }
    } else {
        return "block chain is not valid"
    }



}


function transrealestate(sendercolno, recepientcolno, documentId, privateKey) {
    const blockChainIsvalid = blockChainIsValid(blockChain)
    if (blockChainIsvalid === true) {
        let encryptedblockchain = JSON.parse(localStorage.getItem('encryptedblockChain'))
        let columnChain = blockChain[sendercolno - 1]

        let private = fs.readFileSync("./keys/private.pem", "utf8")

        const lastcolsenderblock = getLastCoBlock(sendercolno)
        const lastcolrecepientblock = getLastCoBlock(recepientcolno)
        const rcolno = lastcolrecepientblock.colNo
        const senderrealestate = lastcolsenderblock.realestateLicense
        const senderrealestateIdinfo = senderrealestate.filter(element => element.documentId == documentId)
        const senderrealestateaddress = senderrealestateIdinfo[0].address
        const senderrealestatedaterelease = senderrealestateIdinfo[0].REreleaseDate
        const senderrealestateimg0 = senderrealestateIdinfo[0].img0
        const senderrealestateimg1 = senderrealestateIdinfo[0].img1
        const senderrealestateimg2 = senderrealestateIdinfo[0].img2
        const senderrealestateimg3 = senderrealestateIdinfo[0].img3
        const senderrealestatepropretysize = senderrealestateIdinfo[0].propretysize
        const senderrealestatelotsize = senderrealestateIdinfo[0].lotsize
        const senderrealestaterooms = senderrealestateIdinfo[0].rooms
        const senderrealestategarages = senderrealestateIdinfo[0].garages
        const senderrealestateyearbuilt = senderrealestateIdinfo[0].yearbuilt
        const senderrealestateavailablefrom = senderrealestateIdinfo[0].availablefrom
        const senderrealestatebathrooms = senderrealestateIdinfo[0].bathrooms
        const senderrealestatesructureType = senderrealestateIdinfo[0].structureType
        const senderrealestateREreleaseDate = senderrealestateIdinfo[0].REreleaseDate
        const senderrealestateownerId = senderrealestateIdinfo[0].ownerId
        const senderrealestatetenant = senderrealestateIdinfo[0].tenant
        const senderrealestateprice = senderrealestateIdinfo[0].price
        const senderrealestategaddress = senderrealestateIdinfo[0].gaddress
        const senderindex = senderrealestate.indexOf(senderrealestateIdinfo[0])
        encryptpublic(sendercolno)
        let encryptedcolchain = encryptedblockchain[0]
        let keyprivate = new rsa(private)
        let decryptedblockchain = keyprivate.decrypt(encryptedcolchain, 'utf8')
        let decrypthash = sha256(JSON.stringify(decryptedblockchain))
        let columnhash = sha256(JSON.stringify(columnChain))

        if (decrypthash = columnhash && sendercolno == process.argv[4] && recepientcolno === rcolno) {
            const datenow = Date.now()
            const releaseDate = new Date(datenow)

            return (createNewColBlockrealestateLicense(recepientcolno, senderrealestateimg0, senderrealestateimg1, senderrealestateimg2, senderrealestateimg3, senderrealestatepropretysize, senderrealestatelotsize, senderrealestaterooms, senderrealestategarages, senderrealestateyearbuilt, senderrealestateavailablefrom, senderrealestatebathrooms, senderrealestatesructureType, senderrealestateaddress, senderrealestateREreleaseDate, senderrealestateownerId, senderrealestatetenant, senderrealestateprice, senderrealestategaddress),
                colblockfortransrealestate(sendercolno, senderindex))
        } else { return "Review your information" }
    } else {
        return "block chain is not valid"
    }

}

function transcar(sendercolno, recepientcolno, recepientfullname, recepientjob, recepientaddress, documentId, privateKey) {
    const blockChainIsvalid = blockChainIsValid(blockChain)
    if (blockChainIsvalid === true) {
        let encryptedblockchain = JSON.parse(localStorage.getItem('encryptedblockChain'))
        let columnChain = blockChain[sendercolno - 1]
        let private = fs.readFileSync("./keys/private.pem", "utf8")

        const lastcolsenderblock = getLastCoBlock(sendercolno)
        const lastcolrecepientblock = getLastCoBlock(recepientcolno)
        const scolno = lastcolsenderblock.colNo
        const rcolno = lastcolrecepientblock.colNo
        const sendercar = lastcolsenderblock.carLicense
        const sendercarinfo = sendercar.filter(element => element.documentId = documentId)
        const sendercareditinghistory = sendercarinfo[0].editingHistory
        const senderdateEnd = sendercarinfo[0].dateEnd
        const senderchassisNo = sendercarinfo[0].chassisNo
        const sendermotorNo = sendercarinfo[0].motorNo
        const sendercartype = sendercarinfo[0].carType
        const senderindex = sendercar.indexOf(sendercarinfo[0])
        encryptpublic(sendercolno)
        let encryptedcolchain = encryptedblockchain[0]
        let keyprivate = new rsa(private)
        let decryptedblockchain = keyprivate.decrypt(encryptedcolchain, 'utf8')
        let decrypthash = sha256(JSON.stringify(decryptedblockchain))
        let columnhash = sha256(JSON.stringify(columnChain))

        if (decrypthash = columnhash && sendercolno == process.argv[4] && recepientcolno == rcolno) {


            return (createNewColBlockcarLicense(recepientcolno, recepientfullname, recepientaddress, senderdateEnd, sendercareditinghistory, recepientjob, senderchassisNo, sendermotorNo, sendercartype),
                colblockforcartrans(sendercolno, senderindex))
        } else { return "Review your information" }
    } else { "block chain is not valid" }
}



function realestateSPcontract(sellercolno, buyercolno, buyerId, sellerId, sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, sellerbankname, buyerbankname, propretyid, privateKey) {
    const datenow = Date.now()
    const releaseDate = new Date(datenow)
    const senderblock = getLastCoBlock(sellercolno)
    const salevalue = senderblock.realestateLicense
    const realestate = salevalue.filter(element => element.documentId = propretyid)
    const propretyId = realestate[0].documentId
    const realestatearr = realestate[0]

    if (sellercolno == process.argv[4] && realestatearr.documentId == propretyId) {
        return (transrealestate(sellercolno, buyercolno, propretyId, privateKey),
            createNewColBlocksalepurchaseContract(buyercolno, sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, releaseDate, propretyId, sellercolno, buyercolno),
            createNewColBlocksalepurchaseContract(sellercolno, sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, releaseDate, propretyId, sellercolno, buyercolno),
            transMoney(buyerId, sellerId, buyercolno, sellercolno, purchaseValue, buyerbankname, sellerbankname, privateKey))

    } else {
        return ("review your information")
    }





}


function carSPcontract(sellercolno, buyercolno, sellerId, buyerId, sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, propretyId, sellercolno, buyercolno, buyerbankname, sellerbankname, buyerjob, privateKey) {
    const datenow = Date.now()
    const releaseDate = new Date(datenow)
    const senderblock = getLastCoBlock(sellercolno)
    const salevalue = senderblock.carLicense
    const car = salevalue.filter(element => element.documentId = propretyId)

    return (
        transcar(sellercolno, buyercolno, buyername, buyerjob, addressbuyer, propretyId, privateKey),
        createNewColBlocksalepurchaseContract(buyercolno, sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, releaseDate, propretyId, sellercolno, buyercolno),
        createNewColBlocksalepurchaseContract(sellercolno, sellername, buyername, sellercoowner, buyercoowner, addressseller, addressbuyer, purchaseValue, releaseDate, propretyId, sellercolno, buyercolno),
        transMoney(buyerId, sellerId, buyercolno, sellercolno, purchaseValue, buyerbankname, sellerbankname, privateKey)
    )
}



function realestateRentContract(lessorcolno, tenantcolno, tenantaddress, lessoraddress, valuedocumentId, lessorphone, tenantphone, endDate, pay, foryears, pentalyclause, tenantbankName, lessorbankName, tenantId, lessorId, lessorname, tenantname, privateKey, releaseDate) {
    const blockChainIsvalid = blockChainIsValid(blockChain)
    if (blockChainIsvalid === true) {
        const lastcolsenderblock = getLastCoBlock(lessorcolno)
        const lastcolrecepientblock = getLastCoBlock(tenantcolno)
        const senderrealestate = lastcolsenderblock.realestateLicense
        const senderrealestateIdinfo = senderrealestate.filter(element => element.documentId == valuedocumentId)
        const senderrealestateaddress = senderrealestateIdinfo[0].address
        const senderrealestatedaterelease = senderrealestateIdinfo[0].REreleaseDate
        const senderrealestateimg0 = senderrealestateIdinfo[0].img0
        const senderrealestateimg1 = senderrealestateIdinfo[0].img1
        const senderrealestateimg2 = senderrealestateIdinfo[0].img2
        const senderrealestateimg3 = senderrealestateIdinfo[0].img3
        const senderrealestatepropretysize = senderrealestateIdinfo[0].propretysize
        const senderrealestatelotsize = senderrealestateIdinfo[0].lotsize
        const senderrealestaterooms = senderrealestateIdinfo[0].rooms
        const senderrealestategarages = senderrealestateIdinfo[0].garages
        const senderrealestateyearbuilt = senderrealestateIdinfo[0].yearbuilt
        const senderrealestateavailablefrom = senderrealestateIdinfo[0].availablefrom
        const senderrealestatebathrooms = senderrealestateIdinfo[0].bathrooms
        const senderrealestatesructureType = senderrealestateIdinfo[0].structureType
        const senderrealestateREreleaseDate = senderrealestateIdinfo[0].REreleaseDate
        const senderrealestateownerId = senderrealestateIdinfo[0].ownerId

        const senderrealestateprice = senderrealestateIdinfo[0].price
        const senderrealestategaddress = senderrealestateIdinfo[0].gaddress
        let senderindex = senderrealestate.indexOf(senderrealestateIdinfo[0])

        let tenant = "true"
        let years = foryears * 12 - 1

        return (createNewColBlockrentContractmonthly(lessorcolno, tenantaddress, lessoraddress, valuedocumentId, lessorphone, tenantphone, endDate, pay, years, pentalyclause, tenantbankName, lessorbankName, tenantcolno, lessorcolno, lessorname, tenantname, releaseDate),
            createNewColBlockrentContractmonthly(tenantcolno, tenantaddress, lessoraddress, valuedocumentId, lessorphone, tenantphone, endDate, pay, years, pentalyclause, tenantbankName, lessorbankName, tenantcolno, lessorcolno, lessorname, tenantname, releaseDate),
            transMoney(tenantId, lessorId, tenantcolno, lessorcolno, pay, tenantbankName, lessorbankName, privateKey),
            createNewColBlockrealestateLicense(lessorcolno, senderrealestateimg0, senderrealestateimg1, senderrealestateimg2, senderrealestateimg3, senderrealestatepropretysize, senderrealestatelotsize, senderrealestaterooms, senderrealestategarages, senderrealestateyearbuilt, senderrealestateavailablefrom, senderrealestatebathrooms, senderrealestatesructureType, senderrealestateaddress, senderrealestateREreleaseDate, senderrealestateownerId, tenant, senderrealestateprice, senderrealestategaddress),
            colblockfortransrealestate(lessorcolno, senderindex))
    }

}

function workcontract(companyId, employerId, companybankName, employerbankName, companycolno, employercolno, companyname, companyaddress, employername, employeraddress, employerposition, employercountry, workhours, workdays, monthsalary, endDate, pentalyclause, privateKey) {
    if (process.argv[4] = companycolno) {
        return (createNewColBlockworkContract(companycolno, companyname, companyaddress, employername, employeraddress, employerposition, employercountry, workhours, workdays, monthsalary, endDate, pentalyclause)
            , createNewColBlockworkContract(employercolno, companyname, companyaddress, employername, employeraddress, employerposition, employercountry, workhours, workdays, monthsalary, endDate, pentalyclause)
            , transMoney(companyId, employerId, companycolno, employercolno, monthsalary, companybankName, employerbankName, privateKey))
    }

}

function loancontract(lendercolno, borrowercolno, lenderId, lendername, lenderaddress, lenderbankname, borrowername, borroweraddress, borrowerbankname, borrowerId, amount, pay, endDate, benefit, guarantee, privateKey) {
    if (lendercolno = process.argv[4]) {
        return (createNewColBlockloanContract(lendercolno, lenderId, lendername, lenderaddress, lenderbankname, borrowername, borroweraddress, borrowerbankname, borrowerId, amount, pay, endDate, benefit, guarantee),
            createNewColBlockloanContract(borrowercolno, lenderId, lendername, lenderaddress, lenderbankname, borrowername, borroweraddress, borrowerbankname, borrowerId, amount, pay, endDate, benefit, guarantee),
            transMoney(lenderId, borrowerId, lendercolno, borrowercolno, amount, lenderbankname, borrowerbankname, privateKey))
    }

}


function rentObligation() {
    blockChain.forEach(rowblock => {

        let colNo = process.argv[4]
        let lastcolblock = getLastCoBlock(colNo)
        let realestateLicense = lastcolblock.realestateLicense[0]
        let rent = lastcolblock.rentContract
        let rentcontract = rent[rent.length - 1]
        let releaseDate = new Date(rentcontract.releaseDate)
        let nowDate = new Date(Date.now())
        let endDate = new Date(rentcontract.endDate)
        let payday = rentcontract.payDateday
        let nowmonth = 12 - (nowDate.getMonth() + 1)
        let endmonth = endDate.getMonth() + 1
        let lastmonths = nowmonth + endmonth
        let actuallast = rentcontract.last
        let releasetime = releaseDate.getTime()
        let nowtime = nowDate.getTime()
        let endtime = endDate.getTime()
        let nowday = nowDate.getDate()
        let lessorcolno = rentcontract.lessorcolno
        let tenantcolno = rentcontract.tenantcolno
        let tenantaddress = rentcontract.tenantaddress
        let lessoraddress = rentcontract.lessoraddress
        let valuedocumentId = realestateLicense.documentId
        let lessorphone = rentcontract.lessorphone
        let tenantphone = rentcontract.tenantphone
        let pay = rentcontract.pay
        let foryears = rentcontract.foryears
        let pentalyclause = 10000
        let tenantbankName = rentcontract.tenantbankName
        let lessorbankName = rentcontract.lessorbankName
        let tenantId = "52303203..20531320313510320"
        let lessorId = "5616165160365113165516"
        let lessorname = rentcontract.lessorname
        let tenantname = rentcontract.tenantname
        let privateKey = "\nMIICXQIBAAKBgQDt0ENQdBHDIkk7HfonbJhzFSJ+fjtsRySxk0BVue+l8YicL3VX\nBPehA2f3v+ybNI+RFZmmBIjAqGQJ3j6d0MtPvEG7Hhgn2wWzpAdEyEqJIiy6MX+a\na1jpH6Rk+qHmvlc8lCdSl0i3ck3i85A/eDbrzkhBaJufQ52ZUCGDfRpAtQIDAQAB\nAoGAZXVMwq5CRbYC+C2548f44mBJ7x17zJ4tkXT5JZnGHE4Hslqs/QspepAxcwl2\nsGCkP4mvm5yjm048H9mpbTr/AZsNcyuAMMVXG8NOZczmwL5kFno63U3jRFCVhLPx\nHVaMvyZD06669Pr6hWyuTmT1cRIhDTHpVWAukR1z5goe/AECQQD4QDi2AICr0kn0\nCWKQFDwRPr67o1cWz9kW/GeTXrY6cOcXUtBXIruKk9mxnyCtLdyLfxUE3+6YCJxU\n98ym9IahAkEA9Tyi63e29IfbazFLFGz3GYdRZSXOyVwkScGmvPtlLune8hJ1VepT\nmfFC1mFhax6KBxHXUnXRi2Pmh9NSzG7FlQJBALelus5ZPNbfMDpKHxH7Bhyz0CG7\nShfkFvL8MhtBO4msMCh+6QUs+pQfoDHYSDIU9Ux07LW4eycZZ50r28e+qUECQQDX\nC/Ydn5vqsFujktUwsyC33SZuGQpNHqSfnNXW8GhZDDI5eiA0V8g5vQuMLFad9Wi6\nLFXx9Gjs34ye3JvFsvlFAkBa6v6VbQnXRpZshcgCPBhVVvYPbl7Z5Z5kqvYlnYDV\nWibHMCy0WB3PW55HCL+7hQG6kKk9RxXwltgZtj13NK8m\n"

        if (releasetime < nowtime < endtime && nowday > payday && actuallast >= lastmonths) {
            return realestateRentContract(lessorcolno, tenantcolno, tenantaddress, lessoraddress, valuedocumentId, lessorphone, tenantphone, endDate, pay, foryears, pentalyclause, tenantbankName, lessorbankName, tenantId, lessorId, lessorname, tenantname, privateKey, releaseDate)
        }


    })
}


function publicprivate() {




    let key = new rsa().generateKeyPair()
    let publicKey = key.exportKey("public")
    let privateKey = key.exportKey("private")
    fs.openSync("./keys/public.pem")
    fs.writeFileSync("./keys/public.pem", publicKey, "utf8")
    fs.openSync("./keys/private.pem")
    fs.writeFileSync("./keys/private.pem", privateKey, "utf8")











}

function updatebc(blockchain) {

    localStorage.removeItem('blockChain')
    return localStorage.setItem('blockChain', JSON.stringify(blockchain))

}

function extractnationalid() {
    let colno = process.argv[4]
    let colChain = blockChain[colno - 1].columnChain
    let colB = colChain[colChain.length - 1]
    let birth = colB.birthCertificate[0]
    let fullName = birth.name
    let address = colB.realestateLicense[0].address
    let gender = "male"
    let id = birth.id
    let job = "business man"
    let img = "https://bl3302files.storage.live.com/y4m7qme1EXxE68pnEhBcPfJdDWrZxEAMWVHU_0to49bYmwWiMBR1Zl3J9gLGGe3q0KuoLLo9ldiFgOCJpZYSggO0M8KZC1t9AnpNgOAj5HMMNGeh5alwdpV1aCG_y7c2d_fNZ4aeGhLzuOBllNK-waMJggGooDVynNQTFhTe2Izi4TpZKkNuih_tqxq5cn2-WFc?width=1536&height=2048&cropmode=none"

    return (createNewColBlocknationalId(colno, fullName, address, gender, id, job, img))

}


















module.exports.blockChain = blockChain
module.exports.encryptedblockChain = encryptedblockChain
module.exports.Block = new Block();
module.exports.createNewGenesisRowBlockrealestateLicense = createNewGenesisRowBlockrealestateLicense
module.exports.createNewRowBlockrealestateLicense = createNewRowBlockrealestateLicense
module.exports.createNewColBlockrealestateLicense = createNewColBlockrealestateLicense
module.exports.createNewGenesisRowBlockcarLicense = createNewGenesisRowBlockcarLicense
module.exports.createNewRowBlockcarLicense = createNewRowBlockcarLicense
module.exports.createNewColBlockcarLicense = createNewColBlockcarLicense
module.exports.transMoney = transMoney
module.exports.blockChainIsValid = blockChainIsValid
module.exports.blockDataIsValid = blockDataIsValid
module.exports.transrealestate = transrealestate
module.exports.transcar = transcar
module.exports.rentObligation = rentObligation
module.exports.getLastCoBlock = getLastCoBlock
module.exports.createNewGenesisRowBlocknationalId = createNewGenesisRowBlocknationalId
module.exports.createNewRowBlocknationalId = createNewRowBlocknationalId
module.exports.createNewColBlockdrivingLicense = createNewColBlockdrivingLicense
module.exports.createNewColBlockcollegecertificate = createNewColBlockcollegecertificate
module.exports.createNewColBlockpassport = createNewColBlockpassport
module.exports.createNewColBlockbirthCertificate = createNewColBlockbirthCertificate
module.exports.createNewColBlockhealthCertificate = createNewColBlockhealthCertificate
module.exports.createNewColBlockmoney = createNewColBlockmoney
module.exports.realestateSPcontract = realestateSPcontract
module.exports.realestateRentContract = realestateRentContract
module.exports.workcontract = workcontract
module.exports.marriageContract = createNewColBlockmarriageContract
module.exports.loanContract = loancontract
module.exports.carSPcontract = carSPcontract
module.exports.dataTypesIsValid = dataTypesIsValid
module.exports.encryptpublic = encryptpublic
module.exports.updatebc = updatebc
module.exports.createNewGenesisRowBlockbirthCertificate = createNewGenesisRowBlockbirthCertificate
module.exports.createNewRowBlockbirthCertificate = createNewRowBlockbirthCertificate
module.exports.extractnationalid = extractnationalid
module.exports.createNewColBlocknationalId = createNewColBlocknationalId



//let encryptedblockChain = JSON.parse(localStorage.getItem('encryptedblockChain'))

//console.log(encryptpublic())
//let encrypted = JSON.parse(localStorage.getItem('decrypted'))

//console.log(publicprivate())
//let encrypted = JSON.parse(localStorage.getItem('encrypted'))
//console.log(encryptedblockChain.length)


*/

const { json } = require('body-parser');
const e = require('express');
const sha256 = require('sha256')
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
let blockChain = JSON.parse(localStorage.getItem('blockChain'))
const rsa = require("node-rsa")
const fs = require("fs")
let encryptedblockChain = JSON.parse(localStorage.getItem('encryptedblockChain'))
const crypto = require("crypto");
const cryptico = require("cryptico")
const NodeRSA = require('node-rsa');
const currentNodeUrl = process.argv[3]
blockChain.currentNodeUrl = currentNodeUrl;
blockChain.networkNodes = ["http://localhost:3002",
    "http://localhost:3003",
    "http://localhost:3004",
    "http://localhost:3005",
    "http://localhost:3006"
]
blockChain.publicKeys = []

function Block() {
    this.columnChain = []
    this.medicalHistory = []

}

function Dblock() {
    this.columnChain = []
    this.medicalHistory = []
    this.patientmedicalhistory = []
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


}

/*
third level of medical History >> The Review of Systems (ROS) is an inventory of the body systems that is obtained
 through a series of questions in order to identify signs and/or symptoms which the patient may be experiencing. 
 The Centers for Medicare and Medicaid Services (CMS) recognizes 14 systems
*/
Block.prototype.reviewOfSystems = function (Wloss, Dsweats, Fati, Mala, Letha, Spattern, Appe, Feve, Itc, Ras, Rtrauma, Lum, Bum, Mass, Vchanges, Hache, Epain, Dvision, Bspots, Floa, AGPdown, Rhemorrhage, Afugax, Ear, Nos, Mout, Throa, Rnose, FNbleeds, Spain, Sears, earP, ringE, gingivalB, toothA, soreT, Pswallow, chestP, Sbreathe, excersiceIn, pn, orthoP, Oed, palp, faint, Lcons, clau, Cou, Spu, Whee, Haemop, SBre, exIN, abdomP, uniNweighL, Dswal, indig, bloat, cram, Lappe, foodAv, Naus, vomit, diarr, consti, INabG, vomB, brredblood, foul, dryB, dys, Huria, Nuria, Puria, Hesit, termDrib, decreFor, Dcha, pai, Mfre, Mreg, exusePad, stainCL, CLot, durat, Pai, firstD, grav, par, abor, mena, menop, contraC, lastS, Pn, Misalig, STmorn, STday, STimprovAct, STworse, jointS, DRmotion, crep, Fdef, arthri, prur, Rsh, Stri, lesi, woun, incis, acanth, nodul, tumo, ecze, exdry, discolo, breastP, sore, lumP, Dchar, chasigh, chansme, chahear, chantaste, seiz, fain, fit, funn, heada, needlS, numbn, limbwe, poorba, speepr, spindis, cogni, pshyco, Depr, sleepa, anxi, DConcen, bodyI, WSperfo, paran, anhedo, Lenerg, epiMani, changpersona, expanspers, sexbin, financ, orefcol, moods, sweat, diarrh, oligo, weLdes, trem, palpit, visual, prefhot, slo, tir, depres, thin, croakv, heavper, constiP, drski, polydi, polyur, polyph, dizz, swea, achH, hung, tongud, dtreatp, chronlblood, ortho, darksk, menar, cycdurfr, vagblee, birthcont, sexarous, diferec, sexaro, depres, lackstam, anem, purp, petec, hemod, afterinj, platdrug, hphil, granf, bdonat, dbrea, anaph, swel, pagro, axilnod, swogla, allermat, allerfood, alleranim, beets, unsneez, runno, itceye, medallerg) {
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

}
/*Complete Blood Count
This test, also known as a CBC, is the most common blood test performed. It measures the types and numbers of cells in the blood, including red and white blood cells and platelets. This test is used to determine general health status, screen for disorders and evaluate nutritional status. It can help evaluate symptoms such as weakness, fatigue and bruising, and can help diagnose conditions such as anemia, leukemia, malaria and infection.

Prothrombin Time
Also known as PT and Pro Time, this test measures how long it takes blood to clot. This coagulation test measures the presence and activity of five different blood clotting factors. This test can screen for bleeding abnormalities, and may also be used to monitor medication treatments that prevent the formation of blood clots.

Basic Metabolic Panel
This test measures glucose, sodium, potassium, calcium, chloride, carbon dioxide, blood urea nitrogen and creatinine which can help determine blood sugar level, electrolyte and fluid balance as well as kidney function. The Basic Metabolic Panel can help your doctor monitor the effects of medications you are taking, such as high blood pressure medicines, can help diagnose certain conditions, or can be part of a routine health screening. You may need to fast for up to 12 hours before this test.

Comprehensive Metabolic Panel
This test combines the Basic Metabolic Panel with six more tests for a more comprehensive evaluation of metabolic functions, with a focus on organ systems.

Lipid Panel
The lipid panel is a group of tests used to evaluate cardiac risk. It includes cholesterol and triglyceride levels.

Liver Panel
The liver panel is a combination of tests used to assess liver function and establish the possible presence of liver tumors.

Thyroid Stimulating Hormone
This test screens and monitors the function of the thyroid.

Hemoglobin A1C
This test is used to diagnose and monitor diabetes.

Urinalysis
Often the first lab test performed, this is a general screening test used to check for early signs of disease. It may also be used to monitor diabetes or kidney disease.

Cultures
Cultures are used to test for diagnosis and treatment of infections. Illnesses such as urinary tract infections, pneumonia, strep throat, MRSA and meningitis can be detected and tested for appropriate antibiotic treatment.

For more information, see www.labtestsonline.org, a public resource on clinical laboratory testing.  */

Block.prototype.labInvestigation = function (investigation) {
    this.investigationReport = investigation

}

Block.prototype.Diagnosis = function (diagnosis) {
    this.Diagnosis = diagnosis

}

Block.prototype.medications = function (Mname, Dose, Every, For) {
    this.medicationName = Mname
    this.dose = Dose
    this.every = Every
    this.for = For


}

Block.prototype.treatementplan = function (problems, goals) {
    this.problems = problems
    this.goals = goals

}



//patient file
Block.prototype.medicalHistoryforP = function () {
    this.personalHistory = []
    this.presentHistory = []
    this.reviewOfSystems = []
    this.pastHistory = []
    this.labInvestigation = []
    this.diagnosis = []
    this.medications = []
    this.treatementplan = []
    this.familyHistory = []



}





function createNewGenesisRowBlockforDoctor(doctorimgcode, doctorname, doctornationalid, doctorid, doctorspecialization, doctorage, doctorphone, doctorgmail, doctoraddress, doctorsex) {
    const block = new Dblock();
    block.previousHash = '0000000000000000000000000000'
    block.downHash = '00000000000000000000000000000000'
    block.doctorName = doctorname
    block.doctornationalid = doctornationalid
    block.doctorid = doctorid
    block.doctorspecialization = doctorspecialization
    block.doctorage = doctorage
    block.doctorphone = doctorphone
    block.doctorgmail = doctorgmail
    block.doctoraddress = doctoraddress
    block.doctorsex = doctorsex
    block.for = "doctor"
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now()
    var doctorRSAkey = cryptico.generateRSAKey(doctorimgcode, 2048);
    var doctorPublicKey = cryptico.publicKeyString(doctorRSAkey);
    block.publicKey = doctorPublicKey
    block.authentication = cryptico.encrypt(doctorimgcode, doctorPublicKey).cipher;
    block.hash = sha256(JSON.stringify(block.timeStamp) + JSON.stringify(block.authentication) + JSON.stringify(block.publicKey) + JSON.stringify(block.doctorName) + JSON.stringify(block.doctornationalid) + JSON.stringify(block.doctorid) + JSON.stringify(block.doctorphone) + JSON.stringify(block.doctorage) + JSON.stringify(block.doctorsex) + JSON.stringify(block.doctoraddress) + JSON.stringify(block.doctorgmail) + JSON.stringify(block.doctorspecialization))
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}


function createRowBlockforDoctor(doctorimgcode, doctorname, doctornationalid, doctorid, doctorspecialization, doctorage, doctorphone, doctorgmail, doctoraddress, doctorsex) {
    const block = new Dblock();
    block.downHash = '00000000000000000000000000000000'
    block.doctorName = doctorname
    block.doctornationalid = doctornationalid
    block.doctorid = doctorid
    block.doctorspecialization = doctorspecialization
    block.doctorage = doctorage
    block.doctorphone = doctorphone
    block.doctorgmail = doctorgmail
    block.doctoraddress = doctoraddress
    block.doctorsex = doctorsex
    block.for = "doctor"
    block.index = blockChain.length + 1
    block.colNo = block.index
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.timeStamp = Date.now()
    var doctorRSAkey = cryptico.generateRSAKey(doctorimgcode, 2048);
    var doctorPublicKey = cryptico.publicKeyString(doctorRSAkey);
    block.publicKey = doctorPublicKey
    block.authentication = cryptico.encrypt(doctorimgcode, doctorPublicKey).cipher;
    block.hash = sha256(JSON.stringify(block.timeStamp) + JSON.stringify(block.authentication) + JSON.stringify(block.publicKey) + JSON.stringify(block.doctorName) + JSON.stringify(block.doctornationalid) + JSON.stringify(block.doctorid) + JSON.stringify(block.doctorphone) + JSON.stringify(block.doctorage) + JSON.stringify(block.doctorsex) + JSON.stringify(block.doctoraddress) + JSON.stringify(block.doctorgmail) + JSON.stringify(block.doctorspecialization) + JSON.stringify(block.previousHash))
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}




//personal history
function createNewRowBlockMedicalHistory(patientimgcode, chiefComplain, releaseDate, citizenId, name, age, sex, occupation, marriedState, residence, habits) {
    const block = new Block();
    let newhealthC = new block.medicalHistoryforP()
    const personalHistory = new block.personalHistory(chiefComplain, releaseDate, citizenId, name, age, sex, occupation, marriedState, residence, habits)
    const lastblock = blockChain[blockChain.length - 1]
    block.previousHash = lastblock.hash
    block.downHash = '00000000000000000000000000000000'
    block.index = blockChain.length + 1
    block.colNo = block.index
    block.timeStamp = Date.now();
    newhealthC.personalHistory.push(personalHistory)
    block.medicalHistory.push(newhealthC)
    block.for = "patient"
    newhealthC.documentId = sha256(JSON.stringify(newhealthC.personalHistory) + JSON.stringify(newhealthC.presentHistory) + JSON.stringify(newhealthC.reviewOfSystems) + JSON.stringify(newhealthC.pastHistory) + JSON.stringify(newhealthC.labInvestigation) + JSON.stringify(newhealthC.diagnosis) + JSON.stringify(newhealthC.medications) + JSON.stringify(newhealthC.treatementplan) + JSON.stringify(newhealthC.familyHistory))
    var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
    var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
    block.publicKey = patientPublicKey
    block.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
    block.hash = sha256(JSON.stringify(newhealthC.documentId) + JSON.stringify(block.timeStamp) + JSON.stringify(block.previousHash) + JSON.stringify(block.authentication) + JSON.stringify(block.publicKey))
    blockChain.push(block)
    return localStorage.setItem('blockChain', JSON.stringify(blockChain))
}

function createNewColBlockMedicalHistoryPpersonalHistory(colno, patientimgcode, chiefComplain, releaseDate, citizenId, name, age, sex, occupation, marriedState, residence, habits) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let personalHistory = new colblock.personalHistory(chiefComplain, releaseDate, citizenId, name, age, sex, occupation, marriedState, residence, habits)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.personalHistory.push(personalHistory)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let personalHistory = new colblock.personalHistory(chiefComplain, releaseDate, citizenId, name, age, sex, occupation, marriedState, residence, habits)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.personalHistory.push(personalHistory)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}





function createNewColBlockMedicalHistoryPresentHistory(colno, patientimgcode, location, system, quality, severity, duration, timing, context, modifyingFactors) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let presentHistory = new colblock.presentHistory(location, system, quality, severity, duration, timing, context, modifyingFactors)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.presentHistory.push(presentHistory)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let presentHistory = new colblock.presentHistory(location, system, quality, severity, duration, timing, context, modifyingFactors)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.presentHistory.push(presentHistory)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}



function createNewColBlockMedicalHistoryReviewSystemSymptoms(colno, patientimgcode, Wloss, Dsweats, Fati, Mala, Letha, Spattern, Appe, Feve, Itc, Ras, Rtrauma, Lum, Bum, Mass, Vchanges, Hache, Epain, Dvision, Bspots, AGPdown, Rhemorrhage, Afugax, Ear, Nos, Mout, Throa, Rnose, FNbleeds, Spain, Sears, earP, ringE, gingivalB, toothA, soreT, Pswallow, chestP, Sbreathe, excersiceIn, pn, orthoP, Oed, palp, faint, Lcons, clau, Cou, Spu, Whee, Haemop, SBre, exIN, abdomP, uniNweighL, Dswal, indig, bloat, cram, Lappe, foodAv, Naus, vomit, diarr, consti, INabG, vomB, brredblood, foul, dryB, dys, Huria, Nuria, Puria, Hesit, termDrib, decreFor, Dcha, pai, Mfre, Mreg, exusePad, stainCL, CLot, durat, Pai, firstD, grav, par, abor, mena, menop, contraC, lastS, Pn, Misalig, STmorn, STday, STimprovAct, STworse, jointS, DRmotion, crep, Fdef, arthri, prur, Rsh, Stri, lesi, woun, incis, acanth, nodul, tumo, ecze, exdry, discolo, breastP, sore, lumP, Dchar, chasigh, chansme, chahear, chantaste, seiz, fain, fit, funn, heada, needlS, numbn, limbwe, poorba, speepr, spindis, cogni, pshyco, Depr, sleepa, anxi, DConcen, bodyI, WSperfo, paran, anhedo, Lenerg, epiMani, changpersona, expanspers, sexbin, financ, orefcol, moods, sweat, diarrh, oligo, weLdes, trem, palpit, visual, prefhot, slo, tir, depres, thin, croakv, heavper, constiP, drski, polydi, polyur, polyph, dizz, swea, achH, hung, tongud, dtreatp, chronlblood, ortho, darksk, menar, cycdurfr, vagblee, birthcont, sexarous, diferec, sexaro, depres, lackstam, anem, purp, petec, hemod, afterinj, platdrug, hphil, granf, bdonat, dbrea, anaph, swel, pagro, axilnod, swogla, allermat, allerfood, alleranim, beets, unsneez, runno, itceye, medallerg) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block()
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        const reviewOfSystems = new colblock.reviewOfSystems(Wloss, Dsweats, Fati, Mala, Letha, Spattern, Appe, Feve, Itc, Ras, Rtrauma, Lum, Bum, Mass, Vchanges, Hache, Epain, Dvision, Bspots, AGPdown, Rhemorrhage, Afugax, Ear, Nos, Mout, Throa, Rnose, FNbleeds, Spain, Sears, earP, ringE, gingivalB, toothA, soreT, Pswallow, chestP, Sbreathe, excersiceIn, pn, orthoP, Oed, palp, faint, Lcons, clau, Cou, Spu, Whee, Haemop, SBre, exIN, abdomP, uniNweighL, Dswal, indig, bloat, cram, Lappe, foodAv, Naus, vomit, diarr, consti, INabG, vomB, brredblood, foul, dryB, dys, Huria, Nuria, Puria, Hesit, termDrib, decreFor, Dcha, pai, Mfre, Mreg, exusePad, stainCL, CLot, durat, Pai, firstD, grav, par, abor, mena, menop, contraC, lastS, Pn, Misalig, STmorn, STday, STimprovAct, STworse, jointS, DRmotion, crep, Fdef, arthri, prur, Rsh, Stri, lesi, woun, incis, acanth, nodul, tumo, ecze, exdry, discolo, breastP, sore, lumP, Dchar, chasigh, chansme, chahear, chantaste, seiz, fain, fit, funn, heada, needlS, numbn, limbwe, poorba, speepr, spindis, cogni, pshyco, Depr, sleepa, anxi, DConcen, bodyI, WSperfo, paran, anhedo, Lenerg, epiMani, changpersona, expanspers, sexbin, financ, orefcol, moods, sweat, diarrh, oligo, weLdes, trem, palpit, visual, prefhot, slo, tir, depres, thin, croakv, heavper, constiP, drski, polydi, polyur, polyph, dizz, swea, achH, hung, tongud, dtreatp, chronlblood, ortho, darksk, menar, cycdurfr, vagblee, birthcont, sexarous, diferec, sexaro, depres, lackstam, anem, purp, petec, hemod, afterinj, platdrug, hphil, granf, bdonat, dbrea, anaph, swel, pagro, axilnod, swogla, allermat, allerfood, alleranim, beets, unsneez, runno, itceye, medallerg)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.reviewOfSystems.push(reviewOfSystems)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        const reviewOfSystems = new colblock.reviewOfSystems(Wloss, Dsweats, Fati, Mala, Letha, Spattern, Appe, Feve, Itc, Ras, Rtrauma, Lum, Bum, Mass, Vchanges, Hache, Epain, Dvision, Bspots, AGPdown, Rhemorrhage, Afugax, Ear, Nos, Mout, Throa, Rnose, FNbleeds, Spain, Sears, earP, ringE, gingivalB, toothA, soreT, Pswallow, chestP, Sbreathe, excersiceIn, pn, orthoP, Oed, palp, faint, Lcons, clau, Cou, Spu, Whee, Haemop, SBre, exIN, abdomP, uniNweighL, Dswal, indig, bloat, cram, Lappe, foodAv, Naus, vomit, diarr, consti, INabG, vomB, brredblood, foul, dryB, dys, Huria, Nuria, Puria, Hesit, termDrib, decreFor, Dcha, pai, Mfre, Mreg, exusePad, stainCL, CLot, durat, Pai, firstD, grav, par, abor, mena, menop, contraC, lastS, Pn, Misalig, STmorn, STday, STimprovAct, STworse, jointS, DRmotion, crep, Fdef, arthri, prur, Rsh, Stri, lesi, woun, incis, acanth, nodul, tumo, ecze, exdry, discolo, breastP, sore, lumP, Dchar, chasigh, chansme, chahear, chantaste, seiz, fain, fit, funn, heada, needlS, numbn, limbwe, poorba, speepr, spindis, cogni, pshyco, Depr, sleepa, anxi, DConcen, bodyI, WSperfo, paran, anhedo, Lenerg, epiMani, changpersona, expanspers, sexbin, financ, orefcol, moods, sweat, diarrh, oligo, weLdes, trem, palpit, visual, prefhot, slo, tir, depres, thin, croakv, heavper, constiP, drski, polydi, polyur, polyph, dizz, swea, achH, hung, tongud, dtreatp, chronlblood, ortho, darksk, menar, cycdurfr, vagblee, birthcont, sexarous, diferec, sexaro, depres, lackstam, anem, purp, petec, hemod, afterinj, platdrug, hphil, granf, bdonat, dbrea, anaph, swel, pagro, axilnod, swogla, allermat, allerfood, alleranim, beets, unsneez, runno, itceye, medallerg)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.reviewOfSystems.push(reviewOfSystems)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}

function createNewColBlockMedicalHistorylabInvestigation(colno, patientimgcode, investigation) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let labinvest = new colblock.labInvestigation(investigation)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.labInvestigation.push(labinvest)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let labinvest = new colblock.labInvestigation(investigation)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.labInvestigation.push(labinvest)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}

function createNewColBlockMedicalHistoryDiagnosis(colno, patientimgcode, diagnosis) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let Newdiagnose = new colblock.Diagnosis(diagnosis)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.diagnosis.push(Newdiagnose)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let Newdiagnose = new colblock.Diagnosis(diagnosis)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.diagnosis.push(Newdiagnose)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}

function createNewColBlockMedicalHistorymedication(colno, patientimgcode, Mname, Dose, Every, For) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let Newmedication = new colblock.medications(Mname, Dose, Every, For)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.medications.push(Newmedication)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let Newmedication = new colblock.medications(Mname, Dose, Every, For)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.medications.push(Newmedication)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}


function createNewColBlockMedicalHistorytreatmentPlan(colno, patientimgcode, problems, goals) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let Newtreatmentplan = new colblock.treatementplan(problems, goals)
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.treatementplan.push(Newtreatmentplan)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let Newtreatmentplan = new colblock.treatementplan(problems, goals)
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.treatementplan.push(Newtreatmentplan)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}


function createNewColBlockMedicalHistoryPastHistory(colno, patientimgcode) {
    if (blockChain[colno - 1].columnChain.length < 1) {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let pastHistory = new colblock.pastHistory()
        let colChain = blockChain[colno - 1].columnChain
        let colB = blockChain[colno - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        pastHistory.personalHistory.push(lastmedichis.personalHistory[lastmedichis.personalHistory.length - 1])
        pastHistory.presentHistory.push(lastmedichis.presentHistory[lastmedichis.presentHistory.length - 1])
        pastHistory.reviewOfSystems.push(lastmedichis.reviewOfSystems[lastmedichis.reviewOfSystems.length - 1])
        pastHistory.labInvestigation.push(lastmedichis.labInvestigation[lastmedichis.labInvestigation.length - 1])
        pastHistory.diagnosis.push(lastmedichis.diagnosis[lastmedichis.diagnosis.length - 1])
        pastHistory.medications.push(lastmedichis.medications[lastmedichis.medications.length - 1])
        pastHistory.treatementplan.push(lastmedichis.treatementplan[lastmedichis.treatementplan.length - 1])
        colblock.downHash = colB.hash
        colblock.index = colChain.length + 2
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.pastHistory.push(pastHistory)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    } else {
        var colblock = new Block();
        let NewmedicalHistory = new colblock.medicalHistoryforP()
        let pastHistory = new colblock.pastHistory()
        let colChain = blockChain[colno - 1].columnChain
        let colB = colChain[colChain.length - 1]
        colblock.medicalHistory.push(...colB.medicalHistory)
        let lastmedichis = colB.medicalHistory[colB.medicalHistory.length - 1]
        NewmedicalHistory.personalHistory.push(...lastmedichis.personalHistory)
        NewmedicalHistory.presentHistory.push(...lastmedichis.presentHistory)
        NewmedicalHistory.reviewOfSystems.push(...lastmedichis.reviewOfSystems)
        NewmedicalHistory.pastHistory.push(...lastmedichis.pastHistory)
        NewmedicalHistory.labInvestigation.push(...lastmedichis.labInvestigation)
        NewmedicalHistory.diagnosis.push(...lastmedichis.diagnosis)
        NewmedicalHistory.medications.push(...lastmedichis.medications)
        NewmedicalHistory.treatementplan.push(...lastmedichis.treatementplan)
        NewmedicalHistory.familyHistory.push(...lastmedichis.familyHistory)
        pastHistory.personalHistory.push(lastmedichis.personalHistory[lastmedichis.personalHistory.length - 1])
        pastHistory.presentHistory.push(lastmedichis.presentHistory[lastmedichis.presentHistory.length - 1])
        pastHistory.reviewOfSystems.push(lastmedichis.reviewOfSystems[lastmedichis.reviewOfSystems.length - 1])
        pastHistory.labInvestigation.push(lastmedichis.labInvestigation[lastmedichis.labInvestigation.length - 1])
        pastHistory.diagnosis.push(lastmedichis.diagnosis[lastmedichis.diagnosis.length - 1])
        pastHistory.medications.push(lastmedichis.medications[lastmedichis.medications.length - 1])
        pastHistory.treatementplan.push(lastmedichis.treatementplan[lastmedichis.treatementplan.length - 1])
        colblock.downHash = colB.hash
        colblock.index = colB.index + 1
        colblock.colNo = colB.colNo
        colblock.timeStamp = Date.now();
        colblock.previousHash = '000000000000000000000000000000000'
        NewmedicalHistory.pastHistory.push(pastHistory)
        colblock.medicalHistory.push(NewmedicalHistory)
        NewmedicalHistory.documentId = sha256(JSON.stringify(NewmedicalHistory.personalHistory) + JSON.stringify(NewmedicalHistory.presentHistory) + JSON.stringify(NewmedicalHistory.reviewOfSystems) + JSON.stringify(NewmedicalHistory.pastHistory) + JSON.stringify(NewmedicalHistory.labInvestigation) + JSON.stringify(NewmedicalHistory.diagnosis) + JSON.stringify(NewmedicalHistory.medications) + JSON.stringify(NewmedicalHistory.treatementplan) + JSON.stringify(NewmedicalHistory.familyHistory))
        var patientRSAkey = cryptico.generateRSAKey(patientimgcode, 2048);
        var patientPublicKey = cryptico.publicKeyString(patientRSAkey);
        colblock.publicKey = patientPublicKey
        colblock.for = "patient"
        colblock.authentication = cryptico.encrypt(patientimgcode, patientPublicKey).cipher;
        colblock.hash = sha256(JSON.stringify(NewmedicalHistory.documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colblock.downHash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
        colChain.push(colblock)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))

    }
}



function createNewcolblockfordoctorSubmittingMedicalHistory(doctorcolno, patientcolno, doctorimgcode) {
    if (blockChain[doctorcolno - 1].columnChain.length < 1) {
        const block = new Dblock();
        let Dlastblock = blockChain[doctorcolno - 1]
        let DcolChain = blockChain[doctorcolno - 1].columnChain
        block.previousHash = '00000000000000000000000000000000'
        block.doctorName = Dlastblock.doctorname
        block.doctornationalid = Dlastblock.doctornationalid
        block.doctorid = Dlastblock.doctorid
        block.doctorspecialization = Dlastblock.doctorspecialization
        block.doctorage = Dlastblock.doctorage
        block.doctorphone = Dlastblock.doctorphone
        block.doctorgmail = Dlastblock.doctorgmail
        block.doctoraddress = Dlastblock.doctoraddress
        block.doctorsex = Dlastblock.doctorsex
        block.for = "doctor"
        let Pcolchain = blockChain[patientcolno - 1].columnChain
        let Plastblock = Pcolchain[Pcolchain.length - 1]
        let Patienthistory = Plastblock.medicalHistory[Plastblock.medicalHistory.length - 1]
        let patientHistoryobj = Patienthistory.pastHistory[Patienthistory.pastHistory.length - 1]
        block.patientmedicalhistory.push(patientHistoryobj)
        block.index = DcolChain.length + 2
        block.colNo = Dlastblock.colNo
        block.downHash = Dlastblock.hash
        block.timeStamp = Date.now()
        var doctorRSAkey = cryptico.generateRSAKey(doctorimgcode, 2048);
        var doctorPublicKey = cryptico.publicKeyString(doctorRSAkey);
        block.publicKey = doctorPublicKey
        block.authentication = cryptico.encrypt(doctorimgcode, doctorPublicKey).cipher;
        block.hash = sha256(JSON.stringify(block.timeStamp) + JSON.stringify(block.authentication) + JSON.stringify(block.publicKey) + JSON.stringify(block.doctorName) + JSON.stringify(block.doctornationalid) + JSON.stringify(block.doctorid) + JSON.stringify(block.doctorphone) + JSON.stringify(block.doctorage) + JSON.stringify(block.doctorsex) + JSON.stringify(block.doctoraddress) + JSON.stringify(block.doctorgmail) + JSON.stringify(block.doctorspecialization) + JSON.stringify(block.previousHash) + JSON.stringify(block.patientmedicalhistory) + JSON.stringify(block.medicalHistory))
        DcolChain.push(block)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))


    } else {
        const block = new Dblock();
        let DcolChain = blockChain[doctorcolno - 1].columnChain
        let Dlastblock = DcolChain[DcolChain.length - 1]
        block.previousHash = '00000000000000000000000000000000'
        block.doctorName = Dlastblock.doctorname
        block.doctornationalid = Dlastblock.doctornationalid
        block.doctorid = Dlastblock.doctorid
        block.doctorspecialization = Dlastblock.doctorspecialization
        block.doctorage = Dlastblock.doctorage
        block.doctorphone = Dlastblock.doctorphone
        block.doctorgmail = Dlastblock.doctorgmail
        block.doctoraddress = Dlastblock.doctoraddress
        block.doctorsex = Dlastblock.doctorsex
        block.for = "doctor"
        let Pcolchain = blockChain[patientcolno - 1].columnChain
        let Plastblock = Pcolchain[Pcolchain.length - 1]
        let Patienthistory = Plastblock.medicalHistory[Plastblock.medicalHistory.length - 1]
        let patientHistoryobj = Patienthistory.pastHistory[Patienthistory.pastHistory.length - 1]
        block.patientmedicalhistory.push(patientHistoryobj)
        block.index = DcolChain.length + 1
        block.colNo = Dlastblock.colNo
        block.downHash = Dlastblock.hash
        block.timeStamp = Date.now()
        var doctorRSAkey = cryptico.generateRSAKey(doctorimgcode, 2048);
        var doctorPublicKey = cryptico.publicKeyString(doctorRSAkey);
        block.publicKey = doctorPublicKey
        block.authentication = cryptico.encrypt(doctorimgcode, doctorPublicKey).cipher;
        block.hash = sha256(JSON.stringify(block.timeStamp) + JSON.stringify(block.authentication) + JSON.stringify(block.publicKey) + JSON.stringify(block.doctorName) + JSON.stringify(block.doctornationalid) + JSON.stringify(block.doctorid) + JSON.stringify(block.doctorphone) + JSON.stringify(block.doctorage) + JSON.stringify(block.doctorsex) + JSON.stringify(block.doctoraddress) + JSON.stringify(block.doctorgmail) + JSON.stringify(block.doctorspecialization) + JSON.stringify(block.previousHash) + JSON.stringify(block.patientmedicalhistory) + JSON.stringify(block.medicalHistory))
        DcolChain.push(block)
        return localStorage.setItem('blockChain', JSON.stringify(blockChain))
    }


}

function dataTypesIsValid(blockChain) {

    let validData
    blockChain.forEach(rowblock => {
        if (rowblock.for === "patient") {
            let actualId = rowblock.medicalHistory[0].documentId
            let testid = sha256(JSON.stringify(rowblock.medicalHistory[0].personalHistory) + JSON.stringify(rowblock.medicalHistory[0].presentHistory) + JSON.stringify(rowblock.medicalHistory[0].reviewOfSystems) + JSON.stringify(rowblock.medicalHistory[0].pastHistory) + JSON.stringify(rowblock.medicalHistory[0].labInvestigation) + JSON.stringify(rowblock.medicalHistory[0].diagnosis) + JSON.stringify(rowblock.medicalHistory[0].medications) + JSON.stringify(rowblock.medicalHistory[0].treatementplan) + JSON.stringify(rowblock.medicalHistory[0].familyHistory))
            if (String(actualId) === String(testid)) {
                validData = true
            } else {
                validData = false
            }
        }
        let colChain = rowblock.columnChain
        colChain.forEach(colblock => {
            colblock.medicalHistory.forEach(medical => {
                let testId = sha256(JSON.stringify(medical.personalHistory) + JSON.stringify(medical.presentHistory) + JSON.stringify(medical.reviewOfSystems) + JSON.stringify(medical.pastHistory) + JSON.stringify(medical.labInvestigation) + JSON.stringify(medical.diagnosis) + JSON.stringify(medical.medications) + JSON.stringify(medical.treatementplan) + JSON.stringify(medical.familyHistory))
                let actualid = medical.documentId
                if (String(testId) === String(actualid)) {
                    validData = true
                } else {
                    validData = false
                }
            })
        })
    }

    )

    return validData
}


function blockDataIsValid(blockChain) {
    let validblockData
    blockChain.forEach(block => {
        let index = blockChain.indexOf(block)
        if (block.for == "patient") {
            if (index == 0) {
                let actualId = block.hash
                let testId = sha256(JSON.stringify(block.medicalHistory[0].documentId) + JSON.stringify(block.timeStamp) + JSON.stringify(block.authentication) + JSON.stringify(block.publicKey))
                if (String(actualId) === String(testId)) {
                    validblockData = true
                } else {
                    validblockData = false
                }

            } else {
                let prevblock = blockChain[index - 1]
                let actualid = block.hash
                let testid = sha256(JSON.stringify(block.medicalHistory[0].documentId) + JSON.stringify(block.timeStamp) + prevblock.hash + JSON.stringify(block.authentication) + JSON.stringify(block.publicKey))
                if (String(actualid) === String(testid)) {
                    validblockData = true
                } else {
                    validblockData = false
                }
            }

        } else {
            if (index == 0) {
                let tesid = sha256(JSON.stringify(block.timeStamp) + JSON.stringify(block.authentication) + JSON.stringify(block.publicKey) + JSON.stringify(block.doctorName) + JSON.stringify(block.doctornationalid) + JSON.stringify(block.doctorid) + JSON.stringify(block.doctorphone) + JSON.stringify(block.doctorage) + JSON.stringify(block.doctorsex) + JSON.stringify(block.doctoraddress) + JSON.stringify(block.doctorgmail) + JSON.stringify(block.doctorspecialization))
                let actuaid = block.hash
                if (String(tesid) === String(actuaid)) {
                    validblockData = true
                } else {
                    validblockData = false
                }
            } else {
                let prevblock = blockChain[index - 1]
                let tesids = sha256(JSON.stringify(block.timeStamp) + JSON.stringify(block.authentication) + JSON.stringify(block.publicKey) + JSON.stringify(block.doctorName) + JSON.stringify(block.doctornationalid) + JSON.stringify(block.doctorid) + JSON.stringify(block.doctorphone) + JSON.stringify(block.doctorage) + JSON.stringify(block.doctorsex) + JSON.stringify(block.doctoraddress) + JSON.stringify(block.doctorgmail) + JSON.stringify(block.doctorspecialization) + JSON.stringify(prevblock.hash))
                let actuaids = block.hash
                if (String(tesids) === String(actuaids)) {
                    validblockData = true
                } else {
                    validblockData = false
                }
            }
        }

        let colChain = block.columnChain

        colChain.forEach(colblock => {
            let index = colChain.indexOf(colblock)
            if (block.for == "patient") {
                if (index == 0) {
                    let actID = colblock.hash
                    let tesID = sha256(JSON.stringify(colblock.medicalHistory[colblock.medicalHistory.length - 1].documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(block.hash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
                    if (String(actID) === String(tesID)) {
                        validblockData = true

                    } else { validblockData = false }
                } else {
                    let actid = colblock.hash
                    let tesid = sha256(JSON.stringify(colblock.medicalHistory[colblock.medicalHistory.length - 1].documentId) + JSON.stringify(colblock.timeStamp) + JSON.stringify(colChain[index - 1].hash) + JSON.stringify(colblock.authentication) + JSON.stringify(colblock.publicKey))
                    if (String(actid) === String(tesid)) {
                        validblockData = true

                    } else { validblockData = false }

                }

            }

        })
    })
    return validblockData

}


function blockChainIsValid(blockChain) {
    let blockDataIsvalid = blockDataIsValid(blockChain)
    let dataTypesisValid = dataTypesIsValid(blockChain)
    let validRowChain = true
    let validColChain = true
    if (blockDataIsvalid === true && dataTypesisValid === true) {

        blockChain.forEach(rowblock => {
            let colchain = rowblock.columnChain
            colchain.forEach(colblock => {
                if (colchain.indexOf(colblock) !== 0) {
                    const downblock = colchain[colchain.indexOf(colblock) - 1]
                    if (colblock.downHash === downblock.hash) {
                        return validColChain
                    } else { return validColChain = false }
                } else {
                    if (colblock.downHash === rowblock.hash) {
                        return validColChain
                    } else { return validColChain = false }
                }


            })
            const previousblock = blockChain[blockChain.indexOf(rowblock) - 1]

            if (blockChain.indexOf(rowblock) !== 0) {
                if (rowblock.previousHash === previousblock.hash) {
                    return validRowChain
                } else { return validRowChain = false }
            }



        });

    } else {
        return false
    }

    if (validRowChain === true && validColChain === true) {
        return true
    } else {
        return false
    }


}


function submitMedicalHistory(doctorcolno, patientcolno, doctorimgcode, patientimgcode) {
    let blockchainvalidation = blockChainIsValid(blockChain)
    if (blockchainvalidation === true) {
        return (createNewColBlockMedicalHistoryPastHistory(patientcolno, patientimgcode), createNewcolblockfordoctorSubmittingMedicalHistory(doctorcolno, patientcolno, doctorimgcode))
    }



}


//localStorage.removeItem('blockChain')
//localStorage.removeItem('encryptedblockChain')

//createNewGenesisRowBlockforDoctor("fvfvvwdv", "dvdvdv", "dvdvdv", "dvdvdv", "dvdvdv", "dvdvdv", "dvdvdv", "dvdvdv", "dvdvdv", "dvdvdv")
//createRowBlockforDoctor("fvfvvwdv", "dvdvdv", "dvdvdv", "dvdvdv", "dvdvdv", "dvdvdv", "dvdvdv", "dvdvdv", "dvdvdv", "dvdvdv")
//console.log(blockChain[0].columnChain[0].medicalHistory)

//createNewRowBlockMedicalHistory("dcdcd", "cdcv4", "6ttbtg", "bbtntnt")
//createNewColBlockMedicalHistoryPresentHistory(1, "location", "system", "quality", "severity", "duration", "timing", "context", "modifyingFactors")
//createNewColBlockMedicalHistoryReviewSystemSymptoms(1, "Wloss", "Dsweats", "Fati", "Mala", "Letha", "Spattern", "Appe", "Feve", "Itc", "Ras", "Rtrauma", "Lum", "Bum", "Mass", "Vchanges", "Hache", "Epain", "Dvision", "Bspots", "Floa", "AGPdown", "Rhemorrhage", "Afugax", "Ear", "Nos", "Mout", "Throa", "Rnose", "FNbleeds", "Spain", "Sears", "earP", "ringE", "gingivalB", "toothA", "soreT", "Pswallow", "chestP", "Sbreathe", "excersiceIn", "pn", "orthoP", "Oed", "true", "true", "true", "true", "true", "true", "true", "true")
module.exports.blockChain = blockChain
//createNewRowBlockMedicalHistory("12345", "ch", "rel", "cit", "Nam", "sx", "ag", "occup", "marrie", "re", "ha")
//createNewColBlockMedicalHistorylabInvestigation(1, "invest")
//createNewColBlockMedicalHistoryDiagnosis(2, "diagnosis")
//createNewColBlockMedicalHistorymedication(2, "mn", "251", "26", "6584")
//createNewColBlockMedicalHistorytreatmentPlan(3, "eddef", "edqfgr")
//createNewColBlockMedicalHistoryPastHistory(2, "kholio")
//console.log(blockDataIsValid(blockChain))
//console.log(dataTypesIsValid(blockChain))
//console.log(blockChainIsValid(blockChain))
//createNewcolblockfordoctorSubmittingMedicalHistory(1, 2, "rfrgrgrg")

