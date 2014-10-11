package org.tempuri;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * <p>
 * Java class for anonymous complex type.
 * <p>
 * <p>
 * The following schema fragment specifies the expected content contained within
 * this class.
 * <p>
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ClearSessionResult" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {"clearSessionResult"})
@XmlRootElement(name = "ClearSessionResponse")
public class ClearSessionResponse {

    @XmlElement(name = "ClearSessionResult")
    protected String clearSessionResult;

    /**
     * Gets the value of the clearSessionResult property.
     *
     * @return possible object is {@link String }
     */
    public String getClearSessionResult() {
        return clearSessionResult;
    }

    /**
     * Sets the value of the clearSessionResult property.
     *
     * @param value allowed object is {@link String }
     */
    public void setClearSessionResult(String value) {
        this.clearSessionResult = value;
    }

}
