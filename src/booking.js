import {BRAND,OCCASIONS} from './config.js';
export function localToday(){const d=new Date();d.setMinutes(d.getMinutes()-d.getTimezoneOffset());return d.toISOString().slice(0,10);}
export function validateBooking(data,today=localToday()){
 const errors={};if(!data.name?.trim()||data.name.trim().length<2)errors.name='Please enter your name.';
 if(!/^\+?[\d\s()-]{7,25}$/.test(data.phone||'')||(data.phone||'').replace(/\D/g,'').length<7)errors.phone='Enter a valid phone number.';
 if(!OCCASIONS.includes(data.occasion))errors.occasion='Please choose an occasion.';
 const validDate=/^\d{4}-\d{2}-\d{2}$/.test(data.date||'')&&Number.isFinite(Date.parse(data.date))&&new Date(data.date).toISOString().slice(0,10)===data.date;
 if(!validDate||data.date<today)errors.date='Choose today or a future date.';
 if(!data.location?.trim())errors.location='Please enter your city or venue.';
 const n=Number(data.people);if(!Number.isInteger(n)||n<1||n>500)errors.people='Enter between 1 and 500 people.';
 return errors;
}
export function bookingMessage(data,designs=[]){return [`Hi ${BRAND.name}! I'd like to enquire about mehndi availability.`,``,`Name: ${data.name.trim()}`,`Phone / WhatsApp: ${data.phone.trim()}`,`Occasion: ${data.occasion}`,`Event date: ${data.date}`,`City / venue: ${data.location.trim()}`,`Number of people: ${data.people}`,data.time?`Preferred time: ${data.time}`:null,data.coverage?`Coverage: ${data.coverage}`:null,designs.length?`Design inspiration:\n${designs.map(p=>`• ${p.title} — ${p.source}`).join('\n')}`:null,data.notes?.trim()?`Notes: ${data.notes.trim()}`:null,``,`Please share availability and a personalised quote. Thank you!`].filter(x=>x!==null).join('\n');}
export function bookingLink(channel,message){if(channel==='email')return `mailto:${BRAND.email}?subject=${encodeURIComponent('Mehndi booking enquiry')}&body=${encodeURIComponent(message)}`;if(channel==='telegram')return `https://t.me/${BRAND.telegram}?text=${encodeURIComponent(message)}`;return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;}
