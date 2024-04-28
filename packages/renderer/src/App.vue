<script lang="ts" setup>

</script>
<template>
  <Vueform>
    <GroupElement
      name="container"
      label="Basic Details"
    >
      <TextElement
        name="text"
        label="Name"
      />
      <TextElement
        name="text_1"
        label="Manuscript Name"
      />
      <DateElement
        name="date"
        label="Effective Date"
        display-format="DD/MM/YYYY"
        :columns="{
          container: 6,
        }"
      />
      <TextElement
        name="text_2"
        label="Line of Business"
        :columns="{
          container: 6,
        }"
      />
      <TextElement
        name="text_3"
        label="Manuscript Path"
      />
    </GroupElement>
    <GroupElement
      name="container_1"
      label="Integration Attributes"
    >
      <RadiogroupElement
        name="radiogroup"
        :items="[
          'Outbound',
          'Inbound',
        ]"
        :columns="{
          wrapper: 6,
        }"
      />
    </GroupElement>
    <GroupElement
      name="container_3"
      label="Integration Token"
    >
      <CheckboxElement
        name="checkbox"
        text="<div>Token required to be fetched before the actual API Call?</div>"
        :default="true"
      />
      <TextElement
        name="url"
        input-type="url"
        :rules="[
          'nullable',
          'url',
        ]"
        :floating="false"
        label="URL"
        placeholder="eg. http(s)://domain.com/..."
        :conditions="[
          [
            'container_3.checkbox',
            '==',
            true,
          ],
        ]"
      />
      <GroupElement
        name="container_2"
        label="Payload"
        :conditions="[
          [
            'container_3.checkbox',
            '==',
            true,
          ],
        ]"
      >
        <TextareaElement
          name="textarea"
          label="Sample Request"
          placeholder="Include a working request for Execute field. Eg. ,   etc."
        />
        <TextareaElement
          name="textarea_copy"
          label="Sample Response - Success"
          placeholder="Include a success response for the working request. Eg.  etc."
        />
        <TextareaElement
          name="textarea_copy2"
          label="Sample Response - Error"
          placeholder="Include a success response for the working request. Eg.  etc."
        />
      </GroupElement>
    </GroupElement>
    <GroupElement
      name="container_2_copy"
      label="Integration Payload"
    >
      <TextElement
        name="url_1"
        input-type="url"
        :rules="[
          'nullable',
          'url',
        ]"
        placeholder="eg. http(s)://domain.com"
        :floating="false"
        label="URL"
      />
      <TextareaElement
        name="textarea"
        label="Sample Request"
        placeholder="Include a working request for Execute field. Eg. ,   etc."
      />
      <TextareaElement
        name="textarea_copy"
        label="Sample Response - Success"
        placeholder="Include a success response for the working request. Eg.  etc."
      />
      <TextareaElement
        name="textarea_copy4"
        label="Sample Response - Error"
        placeholder="Include a success response for the working request. Eg.  etc."
      />
      <CheckboxElement
        name="checkbox_1"
        text="<div>Is XSLT Transform required?</div>"
      />
      <TextareaElement
        name="textarea_copy3"
        label="Desired XSLT Response - Success"
        placeholder="Include a desired XSLT response for success condition."
        :conditions="[
          [
            'container_2_copy.checkbox_1',
            '==',
            true,
          ],
        ]"
      />
      <TextareaElement
        name="textarea_copy2"
        label="Desired XSLT Response - Error"
        placeholder="Include a desired XSLT response for error condition."
        :conditions="[
          [
            'container_2_copy.checkbox_1',
            '==',
            true,
          ],
        ]"
      />
    </GroupElement>
  </Vueform>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 700px;
}

fieldset {
  margin: 2rem;
  padding: 1rem;
}
</style>
