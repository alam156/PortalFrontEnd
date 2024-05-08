import React from 'react';

const MapLocation = () => (
    <div style={{ height: '400px', width: '100%' }}>
        <iframe
            title="map"
            //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.060555553554!2d-73.9855464848652!3d40.74844034334435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c61f432f%3A0x3a9a363bf71c4e8!2s110%20W%2034th%20St%2C%20New%20York%2C%20NY%2010120!5e0!3m2!1sen!2sus!4v1578438466572!5m2!1sen!2sus"
            //src ="https://www.google.com/maps/place/Bangladesh+Computer+Council/@23.7788184,90.3718186,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c0b33134d9cb:0xdaf562015a13a85!8m2!3d23.7788135!4d90.3743935!16s%2Fg%2F1tfclq2d?entry=ttu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.117821552087!2d90.37181857514376!3d23.77881838768522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b33134d9cb%3A0xdaf562015a13a85!2sBangladesh%20Computer%20Council!5e0!3m2!1sen!2sbd!4v1715139815992!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
        />
    </div>
);

export default MapLocation;