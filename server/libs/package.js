const express = require('express');
const colors = require('colors');
const cors = require('cors');
const http = require('http');
const path = require('path');
const env = require('dotenv');
const mongoose = require('mongoose');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const multer = require('multer');

module.exports = {
    express,
    colors,
    cors,
    http,
    path,
    env,
    mongoose,
    joi,
    jwt,
    asyncHandler,
    bcrypt,
    bodyParser,
    multer
}