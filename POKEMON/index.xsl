<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" indent="yes"/>

<xsl:template match="/">
  <html>
  <head>
    <title>Liga Pokémon</title>
    <link rel="stylesheet" type="text/css" href="style.css"/>
  </head>
  <body>
    <h2>Liga Pokémon</h2>
    <xsl:apply-templates/>
  </body>
  </html>
</xsl:template>

<xsl:template match="pokedex">
  <h3>Pokédex</h3>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>ID</th>
      <th>Nombre</th>
      <th>Foto</th>
      <th>Especie</th>
      <th>Tipo</th>
      <th>Habilidades</th>
      <th>Stats</th>
    </tr>
    <xsl:for-each select="pokemon">
      <tr>
        <td><xsl:value-of select="nombre/@id"/></td>
        <td><xsl:value-of select="nombre"/></td>
        <td><img src="{imagen}" alt="{nombre}" /></td>
        <td><xsl:value-of select="especie"/></td>
        <td>
          <xsl:for-each select="tipo">
            <xsl:value-of select="."/>
           </xsl:for-each>
        </td>
        <td>
          <xsl:for-each select="habilidades/habilidad">
          <ul>
            <li>
              <xsl:value-of select="."/>
            </li> 
          </ul>
          </xsl:for-each>
          <xsl:text> - Destacada: </xsl:text>
          <xsl:value-of select="habilidades/habilidadDestacada"/>
        </td>
        <td>
          <xsl:text>PS: </xsl:text><xsl:value-of select="stats/PS"/><br/>
          <xsl:text>Ataque: </xsl:text><xsl:value-of select="stats/Ataque"/><br/>
          <xsl:text>Defensa: </xsl:text><xsl:value-of select="stats/Defensa"/><br/>
          <xsl:text>Velocidad: </xsl:text><xsl:value-of select="stats/Velocidad"/><br/>
          <xsl:text>Ataque Especial: </xsl:text><xsl:value-of select="stats/AtaqueEspecial"/><br/>
          <xsl:text>Defensa Especial: </xsl:text><xsl:value-of select="stats/DefensaEspecial"/><br/>
        </td>
      </tr>
    </xsl:for-each>
  </table>
</xsl:template>

<xsl:template match="entrenadores">
  <h3>Entrenadores</h3>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Edad</th>
      <th>Fecha de Nacimiento</th>
      <th>Lugar de Nacimiento</th>
      <th>Pokémon</th>
      <th>Mote</th>
      <th>Género</th>
      <th>Fecha de Captura</th>
      <th>Tipo de Pokéball</th>
    </tr>
    <xsl:for-each select="entrenador">
      <tr>
        <td><xsl:value-of select="nombreEntrenador"/></td>
        <td><xsl:value-of select="apellidos"/></td>
        <td><xsl:value-of select="edad"/></td>
        <td>
          <xsl:value-of select="concat(fechaNacimiento/@dia, '/', fechaNacimiento/@mes, '/', fechaNacimiento/@año)"/>
        </td>
        <td><xsl:value-of select="lugarNacimiento"/></td>
        <td>
          <ul>
            <xsl:for-each select="pokemonEntrenador">
              <li>
                <xsl:value-of select="mote"/> - Capturado el 
                <xsl:value-of select="concat(@dia, '/', @mes, '/', @año)"/>
              </li>
            </xsl:for-each>
                   </ul>
        </td>
        <td><xsl:value-of select="pokemonEntrenador/mote"/></td>
        <td><xsl:value-of select="pokemonEntrenador/genero"/></td>
        <td>
          <xsl:value-of select="concat(pokemonEntrenador/fechaCaptura/@dia, '/', pokemonEntrenador/fechaCaptura/@mes, '/', pokemonEntrenador/fechaCaptura/@año)"/>
        </td>
        <td><xsl:value-of select="pokemonEntrenador/tipoPokeball"/></td>
      </tr>
    </xsl:for-each>
  </table>
</xsl:template>

</xsl:stylesheet>

