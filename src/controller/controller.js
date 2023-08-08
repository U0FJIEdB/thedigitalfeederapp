const axios=require("axios")
const express=require('express')
const app=express()
exports.index=async(req,res)=>{
    try{

        
        const tdnfapi=await axios.get(`https://thedigitalnewsfeederapi-production.up.railway.app`)
        res.render('index',{articles:tdnfapi.data})
        //console.log(tdnfapi.data)
    }catch(err){
        if(err.response) {
            res.render('index', { articles : null })
            //console.log(err.response.data)
            //console.log(err.response.status)
            //console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('index', { articles : null })
            //console.log(err.requiest)
        } else {
            res.render('index', { articles : null })
            //console.error('Error', err.message)
        }
    }
}

exports.flashnews=async(req,res)=>{
    try{
        const tdnfapi=await axios.get(`https://thedigitalnewsfeederapi-production.up.railway.app/news`)
        res.render('flashnews',{articles:tdnfapi.data})
        //console.log(tdnfapi.data)
    }catch(err){
        if(err.response) {
            res.render('flashnews', { articles : null })
            //console.log(err.response.data)
            //console.log(err.response.status)
            //console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('flashnews', { articles : null })
            //console.log(err.requiest)
        } else {
            res.render('flashnews', { articles : null })
            //console.error('Error', err.message)
        }
    }
}

exports.flashnewsById=async(req,res)=>{
    try{
        const newspapersId=req.params.newspapersId
        const tdnfapi=await axios.get(`https://thedigitalnewsfeederapi-production.up.railway.app/news/:id`)
        res.render('flashnews',{article:'articles',tdnfapi})
        //console.log(tdnfapi.data.newspapersId)
    }catch(err){
        if(err.response) {
            res.render('flashnews', { articles : null })
            //console.log(err.response.data)
            //console.log(err.response.status)
            //console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('flashnews', { articles : null })
            //console.log(err.requiest)
        } else {
            res.render('flashnews', { articles : null })
            //console.error('Error', err.message)
        }
    }
}

exports.cricket=async(req,res)=>{
    try{
        const tdnfapi=await axios.get(`https://thedigitalnewsfeederapi-production.up.railway.app/cricket`)
        res.render('cricket',{articles:tdnfapi.data})
        //console.log(tdnfapi.data)
    }catch(err){
        if(err.response) {
            res.render('cricket', { articles : null })
            //console.log(err.response.data)
            //console.log(err.response.status)
            //console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('cricket', { articles : null })
            //console.log(err.requiest)
        } else {
            res.render('cricket', { articles : null })
            //console.error('Error', err.message)
        }
    }
}

exports.cricketId=async(req,res)=>{
    try{
        const tdnfapi=await axios.get(`https://thedigitalnewsfeederapi-production.up.railway.app/cricket/:{id}`)
        res.render('cricket',{articles:tdnfapi.data})
        //console.log(tdnfapi.data)
    }catch(err){
        if(err.response) {
            res.render('cricket', { articles : null })
            //console.log(err.response.data)
            //console.log(err.response.status)
            //console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('cricket', { articles : null })
            //console.log(err.requiest)
        } else {
            res.render('cricket', { articles : null })
            //console.error('Error', err.message)
        }
    }
}

exports.contactus=async(req,res)=>{
    res.render('report')
}

exports.about=async(req,res)=>{
    res.render('about')
}

exports.team=async(req,res)=>{
    res.render('team')
}

exports.signin=async(req,res)=>{
    res.render('signin')
}
exports.thanks=async(req,res)=>{
    res.render('thanks')
}
exports.search=async(req,res)=>{
    res.render("search")
}