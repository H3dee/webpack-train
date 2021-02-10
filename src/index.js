import {Post} from './post'
import jsonFile from '@assets/file.json'
import csvFile from '@assets/addresses.csv'
import xmlFile from '@assets/data.xml'
import webpackLogo from '@assets/icon-square-big.png'
import './styles/style.css'

const post = new Post('Webpack', webpackLogo)

console.log('Post: ', post.toString())
console.log('Parced json - file: ', jsonFile)
console.log('Parced csv file: ', csvFile)
console.log('Parced xml file: ', xmlFile)