---
id: concepts
title: Core Concepts
---

DID Kit makes as accessible, simple, and portable as possible one of the most difficult aspects of building a credentialing system around W3C verifiable credentials: the issuance and verification mechanism. 

The generation of VCs and VPs requires three separate inputs:
1. Key Material (of the issuer of a VC or the holder of a VP)
2. Data
3. Data Structure (in the form of JSON-LD Schema)

From these, a 4th element, the "proof" is generated by signing over 2 and 3 with 1.  Once these four elements have been combined, a verifiable credential is a portable, tamper-evident unit of data. Optionally, the data often contains the identifier of a "data subject" of the credential; this identifier is often the vital link between a VP and its contents, rendering the whole package meaningful and verifiable.

Running the process in reverse from the side of a verifier, we start from the whole tamperproofed package. Verifying the proofs on a VC or VP requires fetching key material and verification method (i.e., the *type* of key material) from the listed issuer or holder (respectively). It is important to note that the data "payload" of a VP is usually one or more VCs and nothing else, so verifying the outer layer (the VP) reveals a new proof and identity to be queried for key and key type (the VC).